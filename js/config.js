/**
 * Configuración Central de Organic Shop RD
 * Puedes editar tu teléfono de WhatsApp, ofertas y productos fácilmente aquí.
 */

const CONFIG = {
  storeName: "Organic Shop RD",
  slogan: "🌿 Belleza, Salud y Bienestar 100% Orgánico en República Dominicana",
  whatsappNumber: "18494720790", // Número oficial con código de país para WhatsApp (+1 849-472-0790)
  whatsappDisplay: "(849) 472-0790",
  currency: "RD$",
  shippingCost: 0, // 0 = Envío Gratis
  shippingText: "Gratis",
  
  // Oferta complementaria (Order Bump) idéntica a la vista en la referencia
  orderBump: {
    enabled: true,
    id: "bump-1",
    title: "Agrega Bálsamo Labial Reparador 100% Orgánico (Cera & Miel)",
    subtitle: "por solo",
    price: 295.00,
    originalPrice: 590.00,
    image: "assets/images/balsamo_labial.jpg",
    emoji: "🔥"
  },

  // Catálogo de Productos (Fácil de modificar o agregar más productos)
  products: [
    {
      id: "prod-serum-organico",
      name: "Serum Facial Rejuvenecedor Botánico 100% Orgánico",
      category: "Cuidado Facial",
      badge: "MÁS VENDIDO 🌟",
      rating: 4.9,
      reviewsCount: 148,
      image: "assets/images/serum_organico.jpg",
      description: "Fórmula pura a base de extractos botánicos, jojoba silvestre y vitamina E natural. Reduce líneas de expresión, ilumina la piel y restaura la elasticidad natural sin químicos ni parabenos.",
      features: [
        "100% Ingredientes orgánicos certificados",
        "Resultados visibles desde los primeros 14 días",
        "Apto para todo tipo de piel (incluso sensible)",
        "No comedogénico ni grasoso"
      ],
      // Precios coincidentes con la referencia: Subtotal 2,990 - 791 = 2,199
      originalPrice: 2990.00,
      price: 2199.00,
      discount: 791.00,
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (Tratamiento 1 Mes)",
          price: 2199.00,
          originalPrice: 2990.00,
          popular: false
        },
        {
          quantity: 2,
          label: "2 Frascos (Ahorra RD$ 700)",
          price: 3698.00,
          originalPrice: 5980.00,
          popular: true,
          tag: "🔥 MEJOR VALOR"
        },
        {
          quantity: 3,
          label: "3 Frascos (Paga 2 y Llévate 3)",
          price: 4398.00,
          originalPrice: 8970.00,
          popular: false,
          tag: "PAQUETE FAMILIAR"
        }
      ]
    },
    {
      id: "prod-crema-botanica",
      name: "Crema Hidratante Botánica de Aloe Vera Puro & Menta",
      category: "Cuidado Facial & Corporal",
      badge: "NUEVA FÓRMULA 🍃",
      rating: 4.8,
      reviewsCount: 96,
      image: "assets/images/crema_botanica.jpg",
      description: "Hidratación profunda las 24 horas con aloe vera prensado en frío y menta refrescante. Calma rojeces, protege la barrera cutánea del sol caribeño y deja un tacto aterciopelado.",
      features: [
        "Extracto de Aloe Vera orgánico dominicano",
        "Efecto refrescante instantáneo anti-fatiga",
        "Textura ligera de rápida absorción",
        "Frasco con tapa de bambú ecológico"
      ],
      originalPrice: 2500.00,
      price: 1850.00,
      discount: 650.00,
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (200g)",
          price: 1850.00,
          originalPrice: 2500.00,
          popular: false
        },
        {
          quantity: 2,
          label: "2 Tarros (Ahorra RD$ 500)",
          price: 3200.00,
          originalPrice: 5000.00,
          popular: true,
          tag: "OFERTA DÚO"
        }
      ]
    },
    {
      id: "prod-aceite-romero",
      name: "Aceite Puro de Romero & Menta Orgánica Fortalecedor",
      category: "Cuidado Capilar & Barba",
      badge: "VIRAL TIKTOK ✨",
      rating: 5.0,
      reviewsCount: 215,
      image: "assets/images/aceite_romero.jpg",
      description: "Elixir herbal estimulante del crecimiento folicular. Combate la caída del cabello, fortalece las hebras, rellena cejas despobladas y aporta brillo natural sin apelmazar.",
      features: [
        "Maceración artesanal en frío de romero silvestre",
        "Estimula la microcirculación en el cuero cabelludo",
        "Multi-usos: Cabello, cejas, pestañas y barba",
        "Gotero dosificador de máxima precisión"
      ],
      originalPrice: 1990.00,
      price: 1490.00,
      discount: 500.00,
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (60ml)",
          price: 1490.00,
          originalPrice: 1990.00,
          popular: false
        },
        {
          quantity: 2,
          label: "2 Frascos (Ahorra RD$ 400)",
          price: 2580.00,
          originalPrice: 3980.00,
          popular: true,
          tag: "🔥 PACK RECOMENDADO"
        }
      ]
    }
  ],

  // Testimonios de clientes en RD
  testimonials: [
    {
      name: "Lic. Carmen Santana",
      city: "Santo Domingo Este",
      rating: 5,
      comment: "¡Excelente servicio! Pedí el serum por la tarde y al día siguiente en la mañana me llegó a mi casa. Pagué en efectivo al repartidor. 100% recomendado.",
      date: "Hace 2 días"
    },
    {
      name: "Ing. Marcos Peña",
      city: "Santiago de los Caballeros",
      rating: 5,
      comment: "Tenía dudas de comprar por internet pero pagar en casa me dio toda la confianza del mundo. El producto vino sellado y el empaque muy fino.",
      date: "Hace 4 días"
    },
    {
      name: "Valeria Gómez",
      city: "Punta Cana / Higüey",
      rating: 5,
      comment: "El aceite de romero y la crema botánica me dejaron la piel y el pelo como nuevos. La atención por WhatsApp fue súper atenta y rápida.",
      date: "Hace 1 semana"
    }
  ]
};
