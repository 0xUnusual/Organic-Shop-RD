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
  const featuredProductsGrid = document.getElementById("featuredProductsGrid") || document.getElementById("productsGrid");
  const allProductsGrid = document.getElementById("allProductsGrid");
  const categoryFilters = document.getElementById("categoryFilters");
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileNavDropdown = document.getElementById("mobileNavDropdown");
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

  // Modal de confirmación de pedido
  const orderModal = document.getElementById("orderSuccessModal");
  const btnDirectWA = document.getElementById("btnDirectWA");
  const modalOrderNumber = document.getElementById("modalOrderNumber");

  // Modal de Vista Previa de Producto
  const productPreviewModal = document.getElementById("productPreviewModal");
  const btnClosePreview = document.getElementById("btnClosePreview");
  const previewImg = document.getElementById("previewImg");
  const previewBadge = document.getElementById("previewBadge");
  const previewDiscount = document.getElementById("previewDiscount");
  const previewCategory = document.getElementById("previewCategory");
  const previewRatingScore = document.getElementById("previewRatingScore");
  const previewReviewsCount = document.getElementById("previewReviewsCount");
  const previewTitle = document.getElementById("previewTitle");
  const previewPriceCurrent = document.getElementById("previewPriceCurrent");
  const previewPriceOld = document.getElementById("previewPriceOld");
  const previewSavings = document.getElementById("previewSavings");
  const previewDesc = document.getElementById("previewDesc");
  const previewFeaturesList = document.getElementById("previewFeaturesList");
  const previewShareUrl = document.getElementById("previewShareUrl");
  const btnCopyProductLink = document.getElementById("btnCopyProductLink");
  const btnCopyText = document.getElementById("btnCopyText");
  const btnShareWhatsApp = document.getElementById("btnShareWhatsApp");
  const btnPreviewOrder = document.getElementById("btnPreviewOrder");
  const previewBtnTotal = document.getElementById("previewBtnTotal");

  // Notificación Toast Flotante
  const toastNotification = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");

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

  // Generador de URL directa para compartir el producto
  const getProductShareUrl = (productId) => {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}?producto=${encodeURIComponent(productId)}#card-${encodeURIComponent(productId)}`;
  };

  // Mostrar notificación flotante (Toast)
  let toastTimer = null;
  const showToast = (message) => {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  };

  // Copiar enlace del producto al portapapeles
  const copyProductLink = async (productId) => {
    const prod = CONFIG.products.find(p => p.id === productId);
    const shareUrl = getProductShareUrl(productId);
    let copied = false;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        copied = true;
      } catch (err) {
        copied = false;
      }
    }

    if (!copied) {
      const tempInput = document.createElement("input");
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        copied = true;
      } catch (e) {
        copied = false;
      }
      document.body.removeChild(tempInput);
    }

    // Feedback visual en el botón de la modal si está abierta
    if (btnCopyText) {
      const originalText = btnCopyText.textContent;
      btnCopyText.textContent = "¡Copiado! ✓";
      setTimeout(() => {
        if (btnCopyText) btnCopyText.textContent = originalText;
      }, 2000);
    }

    showToast(`¡Enlace copiado al portapapeles! 📋 Listo para compartir.`);
  };

  // Abrir Modal de Vista Previa Detallada
  const openProductPreview = (productId) => {
    const prod = CONFIG.products.find(p => p.id === productId);
    if (!prod || !productPreviewModal) return;

    if (previewImg) {
      previewImg.src = prod.image;
      previewImg.alt = prod.name;
    }
    if (previewBadge) previewBadge.textContent = prod.badge;
    if (previewDiscount) previewDiscount.textContent = `AHORRA ${formatRD(prod.discount)}`;
    if (previewCategory) previewCategory.textContent = prod.category;
    if (previewRatingScore) previewRatingScore.textContent = prod.rating;
    if (previewReviewsCount) previewReviewsCount.textContent = `(${prod.reviewsCount} opiniones verificadas)`;
    if (previewTitle) previewTitle.textContent = prod.name;
    if (previewPriceCurrent) previewPriceCurrent.textContent = formatRD(prod.price);
    if (previewPriceOld) previewPriceOld.textContent = formatRD(prod.originalPrice);
    if (previewSavings) previewSavings.textContent = `Ahorro: ${formatRD(prod.discount)}`;
    if (previewDesc) previewDesc.textContent = prod.description;

    if (previewFeaturesList) {
      previewFeaturesList.innerHTML = prod.features.map(f => `
        <li>
          <span class="feat-check">✓</span>
          <span>${f}</span>
        </li>
      `).join("");
    }

    const shareUrl = getProductShareUrl(prod.id);
    if (previewShareUrl) previewShareUrl.value = shareUrl;

    if (btnShareWhatsApp) {
      const waShareText = `🌿 ¡Mira este producto orgánico de Organic Shop RD! 🇩🇴\n*${prod.name}*\n💰 Precio especial: ${formatRD(prod.price)}\n🚚 Paga en efectivo al recibir en casa.\n👉 ${shareUrl}`;
      btnShareWhatsApp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(waShareText)}`;
    }

    if (previewBtnTotal) previewBtnTotal.textContent = formatRD(prod.price);

    // Botón ordenar dentro de la vista previa
    if (btnPreviewOrder) {
      btnPreviewOrder.onclick = () => {
        closeProductPreview();
        selectProduct(prod.id);
        scrollToCheckout();
      };
    }

    // Copiar enlace dentro del modal
    if (btnCopyProductLink) {
      btnCopyProductLink.onclick = () => {
        copyProductLink(prod.id);
      };
    }

    // Mostrar modal
    productPreviewModal.classList.add("show");
    productPreviewModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Actualizar URL sin recargar para que refleje el enlace específico del producto
    try {
      history.replaceState({ productId: prod.id }, "", shareUrl);
    } catch (e) {}
  };

  // Cerrar Modal de Vista Previa
  const closeProductPreview = () => {
    if (!productPreviewModal) return;
    productPreviewModal.classList.remove("show");
    productPreviewModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Limpiar el parámetro de la URL al cerrar el modal
    try {
      const cleanUrl = window.location.pathname + (window.location.hash || "");
      history.replaceState(null, "", cleanUrl);
    } catch (e) {}
  };

  // Eventos para cerrar el modal
  if (btnClosePreview) {
    btnClosePreview.addEventListener("click", closeProductPreview);
  }
  if (productPreviewModal) {
    productPreviewModal.addEventListener("click", (e) => {
      if (e.target === productPreviewModal) {
        closeProductPreview();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && productPreviewModal && productPreviewModal.classList.contains("show")) {
      closeProductPreview();
    }
  });

  // Creador común de tarjeta de producto con Vista Previa y Botón de Compartir
  const createProductCard = (prod, isFeatured = false) => {
    const card = document.createElement("div");
    card.className = `product-card ${isFeatured ? "product-card-featured" : ""}`;
    card.id = `card-${prod.id}`;
    card.setAttribute("data-product-id", prod.id);
    card.setAttribute("data-product-category", prod.category);
    
    card.innerHTML = `
      <div class="card-image-box" title="Clic para ver vista previa completa">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        <span class="card-badge">${prod.badge}</span>
        <span class="card-discount-tag">AHORRA ${formatRD(prod.discount)}</span>
        <div class="card-image-overlay">
          <span class="overlay-preview-pill">👁️ Vista Previa</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-category">${prod.category}</span>
        <h3 class="card-title" title="Clic para ver vista previa">${prod.name}</h3>
        <div class="card-rating">
          ★★★★★ <strong>${prod.rating}</strong> <span>(${prod.reviewsCount} opiniones)</span>
        </div>
        <p class="card-desc">${prod.description}</p>
        <ul class="card-features">
          ${prod.features.slice(0, 3).map(f => `<li>${f}</li>`).join("")}
        </ul>
        <div class="card-pricing">
          <span class="price-current">${formatRD(prod.price)}</span>
          <span class="price-old">${formatRD(prod.originalPrice)}</span>
        </div>

        <!-- Barra de Acciones: Vista Previa & Compartir Enlace -->
        <div class="card-action-bar">
          <button type="button" class="btn-card-preview" data-product-id="${prod.id}" title="Ver vista previa con descripción completa">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Vista Previa</span>
          </button>
          <button type="button" class="btn-card-share" data-product-id="${prod.id}" title="Copiar enlace de este producto">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>Compartir</span>
          </button>
        </div>

        <button type="button" class="btn-card-order" data-product-id="${prod.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </svg>
          ORDENAR Y PAGAR EN CASA
        </button>
      </div>
    `;

    // 1. Abrir vista previa al pulsar el botón, la imagen o el título
    const previewBtn = card.querySelector(".btn-card-preview");
    const imageBox = card.querySelector(".card-image-box");
    const titleEl = card.querySelector(".card-title");
    [previewBtn, imageBox, titleEl].forEach((elem) => {
      if (elem) {
        elem.addEventListener("click", () => openProductPreview(prod.id));
      }
    });

    // 2. Copiar enlace al presionar botón de compartir
    const shareBtn = card.querySelector(".btn-card-share");
    if (shareBtn) {
      shareBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyProductLink(prod.id);
      });
    }

    // 3. Ordenar directo al formulario de compra
    const orderBtn = card.querySelector(".btn-card-order");
    if (orderBtn) {
      orderBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectProduct(prod.id);
        scrollToCheckout();
      });
    }

    return card;
  };

  // 3. Renderizar Productos Destacados (Exactamente 3 productos)
  const renderFeaturedProducts = () => {
    if (!featuredProductsGrid) return;
    featuredProductsGrid.innerHTML = "";

    // Filtramos los productos destacados (o los 3 primeros)
    const featuredItems = CONFIG.products.filter(p => p.featured).slice(0, 3);
    const itemsToShow = featuredItems.length === 3 ? featuredItems : CONFIG.products.slice(0, 3);

    itemsToShow.forEach((prod) => {
      const card = createProductCard(prod, true);
      featuredProductsGrid.appendChild(card);
    });
  };

  // 4. Renderizar Catálogo Completo de Productos (10 Productos con Filtro)
  const renderAllProducts = (filterCategory = "all") => {
    if (!allProductsGrid) return;
    allProductsGrid.innerHTML = "";

    const filtered = filterCategory === "all"
      ? CONFIG.products
      : CONFIG.products.filter(p => p.category === filterCategory);

    filtered.forEach((prod) => {
      const card = createProductCard(prod, false);
      allProductsGrid.appendChild(card);
    });
  };

  // Manejo de Filtros de Categoría
  const initCategoryFilters = () => {
    if (!categoryFilters) return;
    const filterButtons = categoryFilters.querySelectorAll(".filter-pill");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");
        renderAllProducts(category);
      });
    });
  };

  // 5. Manejo del Menú de Navegación Móvil
  const initMobileNavigation = () => {
    if (!mobileNavToggle || !mobileNavDropdown) return;

    mobileNavToggle.addEventListener("click", () => {
      const isExpanded = mobileNavToggle.getAttribute("aria-expanded") === "true";
      mobileNavToggle.setAttribute("aria-expanded", !isExpanded);
      mobileNavToggle.classList.toggle("open", !isExpanded);
      mobileNavDropdown.classList.toggle("open", !isExpanded);
    });

    // Cerrar el menú al pulsar cualquier enlace del menú móvil
    const mobileLinks = mobileNavDropdown.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavToggle.setAttribute("aria-expanded", "false");
        mobileNavToggle.classList.remove("open");
        mobileNavDropdown.classList.remove("open");
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

  // 12. Navegación activa con scroll
  const initScrollSpy = () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".site-nav .nav-link");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {
      let current = "";
      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href && (href === `#${current}` || (current === "" && href === "#"))) {
          link.classList.add("active");
        }
      });
    }, { passive: true });
  };

  // 13. Redirección Automática al Producto Compartido por Enlace (?producto=ID o #card-ID)
  const checkProductDeepLink = () => {
    let targetId = null;

    try {
      const urlParams = new URLSearchParams(window.location.search);
      targetId = urlParams.get("producto") || urlParams.get("prod") || urlParams.get("p");
    } catch (e) {}

    if (!targetId && window.location.hash) {
      const hash = window.location.hash;
      if (hash.startsWith("#card-")) {
        targetId = hash.replace("#card-", "");
      } else if (hash.startsWith("#producto-")) {
        targetId = hash.replace("#producto-", "");
      }
    }

    if (!targetId) return;

    const matchedProduct = CONFIG.products.find(p => p.id === targetId);
    if (!matchedProduct) return;

    // Retardo suave para asegurar renderizado de las tarjetas en el DOM
    setTimeout(() => {
      // 1. Desplazamiento suave hacia la tarjeta del producto específico
      const targetCard = document.getElementById(`card-${matchedProduct.id}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.classList.add("product-card-highlighted");
        setTimeout(() => {
          targetCard.classList.remove("product-card-highlighted");
        }, 3500);
      }

      // 2. Abrir automáticamente la vista previa detallada del producto
      openProductPreview(matchedProduct.id);
    }, 400);
  };

  // Escuchar cambios de hash o historial para navegación directa
  window.addEventListener("hashchange", checkProductDeepLink);
  window.addEventListener("popstate", checkProductDeepLink);

  // Inicialización de componentes
  initThemeSwitcher();
  initMobileNavigation();
  initCategoryFilters();
  initScrollSpy();
  initQuantityControl();
  initProvinces();
  initProductSelector();
  renderFeaturedProducts();
  renderAllProducts("all");
  renderTestimonials();
  updatePriceCalculations();
  checkProductDeepLink();
});

