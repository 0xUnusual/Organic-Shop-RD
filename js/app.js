/**
 * Organic Shop RD - Aplicación Principal
 * Manejo de catálogo, formulario contra entrega, recálculo dinámico y envío a WhatsApp
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado actual del pedido
  let currentProduct = CONFIG.products[0];
  let currentPack = currentProduct.packs ? currentProduct.packs[0] : null;
  let currentQuantity = 1;
  let isBumpActive = false;

  // Elementos del DOM
  const productsGrid = document.getElementById("productsGrid");
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  const selectProductCheckout = document.getElementById("selectProductCheckout");
  const inputProductQty = document.getElementById("inputProductQty");
  const btnQtyMinus = document.getElementById("btnQtyMinus");
  const btnQtyPlus = document.getElementById("btnQtyPlus");
  const selectProvincia = document.getElementById("inputProvincia");
  const selectCiudad = document.getElementById("inputCiudad");
  const bumpCheckbox = document.getElementById("bumpCheckbox");
  const bumpContainer = document.getElementById("orderBumpContainer");
  const orderForm = document.getElementById("orderForm");

  // Resumen de precios
  const elSubtotal = document.getElementById("summarySubtotal");
  const elDiscount = document.getElementById("summaryDiscount");
  const elShipping = document.getElementById("summaryShipping");
  const elTotal = document.getElementById("summaryTotal");
  const elBtnTotal = document.getElementById("btnSubmitTotal");

  // Modal de confirmación
  const orderModal = document.getElementById("orderSuccessModal");
  const btnDirectWA = document.getElementById("btnDirectWA");
  const modalOrderNumber = document.getElementById("modalOrderNumber");

  // Formateador de moneda en pesos dominicanos
  const formatRD = (amount) => {
    return "RD$ " + Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // 1. Inicializar lista de provincias de RD
  const initProvinces = () => {
    if (!selectProvincia) return;
    selectProvincia.innerHTML = '<option value="">Selecciona tu provincia</option>';
    
    Object.keys(RD_LOCATIONS).forEach((provincia) => {
      const option = document.createElement("option");
      option.value = provincia;
      option.textContent = provincia;
      selectProvincia.appendChild(option);
    });
  };

  // 2. Manejar cambio de provincia para cargar municipios
  if (selectProvincia) {
    selectProvincia.addEventListener("change", (e) => {
      const prov = e.target.value;
      if (!selectCiudad) return;

      selectCiudad.innerHTML = '<option value="">Selecciona tu ciudad, municipio o pueblo</option>';
      if (prov && RD_LOCATIONS[prov]) {
        RD_LOCATIONS[prov].forEach((mun) => {
          const opt = document.createElement("option");
          opt.value = mun;
          opt.textContent = mun;
          selectCiudad.appendChild(opt);
        });
        selectCiudad.disabled = false;
      } else {
        selectCiudad.disabled = true;
      }
    });
  }

  // 3. Renderizar Catálogo de Productos
  const renderCatalog = () => {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    CONFIG.products.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="card-image-box">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
          <span class="card-badge">${prod.badge}</span>
          <span class="card-discount-tag">AHORRA ${formatRD(prod.discount)}</span>
        </div>
        <div class="card-body">
          <span class="card-category">${prod.category}</span>
          <h3 class="card-title">${prod.name}</h3>
          <div class="card-rating">
            ★★★★★ <strong>${prod.rating}</strong> <span>(${prod.reviewsCount} opiniones)</span>
          </div>
          <ul class="card-features">
            ${prod.features.slice(0, 3).map(f => `<li>${f}</li>`).join("")}
          </ul>
          <div class="card-pricing">
            <span class="price-current">${formatRD(prod.price)}</span>
            <span class="price-old">${formatRD(prod.originalPrice)}</span>
          </div>
          <button type="button" class="btn-card-order" data-product-id="${prod.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
            </svg>
            ORDENAR Y PAGAR EN CASA
          </button>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    // Eventos en botones de ordenar del catálogo
    document.querySelectorAll(".btn-card-order").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const prodId = btn.getAttribute("data-product-id");
        selectProduct(prodId);
        scrollToCheckout();
      });
    });
  };

  // 4. Renderizar Testimonios
  const renderTestimonials = () => {
    if (!testimonialsGrid) return;
    testimonialsGrid.innerHTML = "";
    CONFIG.testimonials.forEach((item) => {
      const tCard = document.createElement("div");
      tCard.className = "testimonial-card";
      tCard.innerHTML = `
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"${item.comment}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${item.name.charAt(0)}</div>
          <div class="author-info">
            <strong>${item.name}</strong>
            <span>${item.city} • <em>${item.date}</em></span>
          </div>
        </div>
      `;
      testimonialsGrid.appendChild(tCard);
    });
  };

  // 5. Poblar selector de productos en el checkout
  const initProductSelector = () => {
    if (!selectProductCheckout) return;
    selectProductCheckout.innerHTML = "";

    CONFIG.products.forEach((prod) => {
      const opt = document.createElement("option");
      opt.value = prod.id;
      opt.textContent = `${prod.name} - ${formatRD(prod.price)}`;
      selectProductCheckout.appendChild(opt);
    });

    selectProductCheckout.addEventListener("change", (e) => {
      selectProduct(e.target.value);
    });
  };

  // Seleccionar producto y recalcular
  const selectProduct = (prodId) => {
    const found = CONFIG.products.find(p => p.id === prodId);
    if (found) {
      currentProduct = found;
      currentPack = found.packs ? found.packs[0] : null;
      if (selectProductCheckout) {
        selectProductCheckout.value = found.id;
      }
      updatePriceCalculations();
    }
  };

  // 6. Recalcular Precios en Tiempo Real según Producto, Cantidad y Order Bump
  const updatePriceCalculations = () => {
    const qty = currentQuantity;
    const baseSubtotal = currentProduct.originalPrice * qty;
    const baseDiscount = currentProduct.discount * qty;
    const bumpPrice = isBumpActive ? CONFIG.orderBump.price : 0;
    const bumpOriginal = isBumpActive ? CONFIG.orderBump.originalPrice : 0;
    const shipping = CONFIG.shippingCost;

    const netSubtotal = baseSubtotal + bumpOriginal;
    const totalDiscount = baseDiscount + (isBumpActive ? (CONFIG.orderBump.originalPrice - CONFIG.orderBump.price) : 0);
    const finalTotal = (currentProduct.price * qty) + bumpPrice + shipping;

    if (elSubtotal) elSubtotal.textContent = formatRD(netSubtotal);
    if (elDiscount) elDiscount.textContent = `-${formatRD(totalDiscount)}`;
    if (elShipping) elShipping.textContent = CONFIG.shippingCost === 0 ? "Gratis" : formatRD(CONFIG.shippingCost);
    if (elTotal) elTotal.textContent = formatRD(finalTotal);
    if (elBtnTotal) elBtnTotal.textContent = formatRD(finalTotal);
  };

  // Controlador del selector de cantidad (+ y -)
  const initQuantityControl = () => {
    if (btnQtyMinus) {
      btnQtyMinus.addEventListener("click", () => {
        if (currentQuantity > 1) {
          currentQuantity--;
          if (inputProductQty) inputProductQty.value = currentQuantity;
          updatePriceCalculations();
        }
      });
    }

    if (btnQtyPlus) {
      btnQtyPlus.addEventListener("click", () => {
        if (currentQuantity < 99) {
          currentQuantity++;
          if (inputProductQty) inputProductQty.value = currentQuantity;
          updatePriceCalculations();
        }
      });
    }
  };

  // 7. Manejo del Order Bump (Casilla Verde punteada)
  if (bumpContainer && bumpCheckbox) {
    bumpContainer.addEventListener("click", (e) => {
      // Evitar doble toggle si se hace click directamente en el input checkbox
      if (e.target !== bumpCheckbox) {
        bumpCheckbox.checked = !bumpCheckbox.checked;
      }
      isBumpActive = bumpCheckbox.checked;
      bumpContainer.classList.toggle("active", isBumpActive);
      updatePriceCalculations();
    });

    bumpCheckbox.addEventListener("change", () => {
      isBumpActive = bumpCheckbox.checked;
      bumpContainer.classList.toggle("active", isBumpActive);
      updatePriceCalculations();
    });
  }

  // 8. Desplazamiento suave al Checkout
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById("checkoutSection");
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: "smooth" });
      const firstInput = document.getElementById("inputNombre");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  // Botones de CTA globales hacia el Checkout
  document.querySelectorAll(".btn-go-checkout").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToCheckout();
    });
  });

  // 9. Validación del Formulario y Envío a WhatsApp
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("inputNombre").value.trim();
      const apellido = document.getElementById("inputApellido").value.trim();
      const celular = document.getElementById("inputCelular").value.trim();
      const provincia = selectProvincia ? selectProvincia.value : "";
      const ciudad = selectCiudad ? selectCiudad.value : "";
      const direccion = document.getElementById("inputDireccion").value.trim();
      const referencia = document.getElementById("inputReferencia").value.trim();

      // Validación simple
      let hasError = false;
      const inputsToCheck = [
        { el: document.getElementById("inputNombre"), valid: nombre.length >= 2 },
        { el: document.getElementById("inputApellido"), valid: apellido.length >= 2 },
        { el: document.getElementById("inputCelular"), valid: celular.length >= 7 },
        { el: selectProvincia, valid: provincia !== "" },
        { el: selectCiudad, valid: ciudad !== "" },
        { el: document.getElementById("inputDireccion"), valid: direccion.length >= 4 }
      ];

      inputsToCheck.forEach(({ el, valid }) => {
        if (!el) return;
        const parent = el.closest(".input-with-icon") || el;
        if (!valid) {
          parent.classList.add("error");
          hasError = true;
        } else {
          parent.classList.remove("error");
        }
      });

      if (hasError) {
        alert("Por favor completa todos los campos requeridos con asterisco (*).");
        return;
      }

      // Generar ID de Orden
      const orderNumber = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      const qty = currentQuantity;
      const productTotal = currentProduct.price * qty;
      const bumpPrice = isBumpActive ? CONFIG.orderBump.price : 0;
      const bumpOriginal = isBumpActive ? CONFIG.orderBump.originalPrice : 0;
      const netSubtotal = (currentProduct.originalPrice * qty) + bumpOriginal;
      const totalDiscount = (currentProduct.discount * qty) + (isBumpActive ? (CONFIG.orderBump.originalPrice - CONFIG.orderBump.price) : 0);
      const finalTotal = productTotal + bumpPrice + CONFIG.shippingCost;

      // Crear mensaje estructurado para WhatsApp
      let msg = `🌿 *¡NUEVO PEDIDO - ORGANIC SHOP RD!* 🇩🇴\n`;
      msg += `*Orden:* #${orderNumber}\n\n`;

      msg += `📦 *PRODUCTO Y CANTIDAD:*\n`;
      if (qty === 1) {
        msg += `• *Cantidad:* 1 unidad\n`;
        msg += `• *Producto:* ${currentProduct.name} (${formatRD(currentProduct.price)})\n`;
      } else {
        msg += `• *Cantidad:* ${qty} unidades\n`;
        msg += `• *Producto:* ${currentProduct.name} (${formatRD(currentProduct.price)} c/u = ${formatRD(productTotal)})\n`;
      }
      if (isBumpActive) {
        msg += `• 🔥 *Oferta Especial (Order Bump):* ${CONFIG.orderBump.title} (${formatRD(CONFIG.orderBump.price)})\n`;
      }

      msg += `\n💰 *DETALLE DEL PAGO:*\n`;
      msg += `• Subtotal: ${formatRD(netSubtotal)}\n`;
      msg += `• Descuento: -${formatRD(totalDiscount)}\n`;
      msg += `• Envío: GRATIS 🚚\n`;
      msg += `• *TOTAL A PAGAR EN CASA:* ${formatRD(finalTotal)}\n\n`;

      msg += `📍 *DATOS DE ENTREGA:*\n`;
      msg += `• *Cliente:* ${nombre} ${apellido}\n`;
      msg += `• *Celular con WhatsApp:* ${celular}\n`;
      msg += `• *Provincia:* ${provincia}\n`;
      msg += `• *Ciudad / Municipio:* ${ciudad}\n`;
      msg += `• *Dirección:* ${direccion}\n`;
      if (referencia) {
        msg += `• *Referencia:* ${referencia}\n`;
      }
      msg += `\n💵 *MÉTODO DE PAGO:* Pago Contra Entrega (Efectivo al recibir en mano)\n\n`;
      msg += `¡Hola! Acabo de completar el formulario en la página web. Deseo confirmar mi entrega. 🚚🌿`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${encodeURIComponent(msg)}`;

      // Mostrar modal de confirmación y redirección
      if (modalOrderNumber) modalOrderNumber.textContent = `#${orderNumber}`;
      if (btnDirectWA) btnDirectWA.href = whatsappUrl;
      if (orderModal) orderModal.classList.add("show");

      // Lanzar animación de confetti
      triggerConfetti();

      // Abrir WhatsApp en nueva pestaña
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 700);
    });
  }

  // 10. Función de animación de Confetti nativo
  const triggerConfetti = () => {
    const colors = ["#16a34a", "#22c55e", "#86efac", "#eab308", "#15803d"];
    for (let i = 0; i < 40; i++) {
      const conf = document.createElement("div");
      conf.style.position = "fixed";
      conf.style.width = `${Math.random() * 8 + 6}px`;
      conf.style.height = `${Math.random() * 8 + 6}px`;
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.left = `${Math.random() * 100}vw`;
      conf.style.top = "-10px";
      conf.style.borderRadius = "2px";
      conf.style.zIndex = "10000";
      conf.style.pointerEvents = "none";
      conf.style.transform = `rotate(${Math.random() * 360}deg)`;
      conf.style.transition = `transform ${Math.random() * 2 + 1.5}s ease-out, top ${Math.random() * 2 + 1.5}s ease-out, opacity 1.5s`;
      document.body.appendChild(conf);

      setTimeout(() => {
        conf.style.top = `${Math.random() * 60 + 40}vh`;
        conf.style.transform = `rotate(${Math.random() * 720}deg) scale(0.6)`;
        conf.style.opacity = "0";
      }, 50);

      setTimeout(() => conf.remove(), 3000);
    }
  };

  // 11. Selector de Modo Claro / Oscuro
  const initThemeSwitcher = () => {
    const themeBtn = document.getElementById("themeToggleBtn");
    if (!themeBtn) return;

    const updateThemeUI = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      const isDark = theme === "dark";
      themeBtn.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
      themeBtn.setAttribute("title", isDark ? "Modo Claro" : "Modo Oscuro");
    };

    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    updateThemeUI(currentTheme);

    themeBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      updateThemeUI(nextTheme);
      localStorage.setItem("organic_theme", nextTheme);
    });

    // Sincronizar si cambia la preferencia del sistema operativo
    try {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("organic_theme")) {
          updateThemeUI(e.matches ? "dark" : "light");
        }
      });
    } catch (err) {
      // Compatibilidad con navegadores antiguos
    }
  };

  // Inicialización de componentes
  initThemeSwitcher();
  initQuantityControl();
  initProvinces();
  initProductSelector();
  renderCatalog();
  renderTestimonials();
  updatePriceCalculations();
});

