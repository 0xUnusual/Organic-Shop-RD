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

  // Catálogo de Productos (10 Productos Orgánicos Certificados)
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
      originalPrice: 2990.00,
      price: 2199.00,
      discount: 791.00,
      featured: true,
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
      category: "Cuidado Facial",
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
      featured: true,
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
      category: "Cuidado Capilar",
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
      featured: true,
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
    },
    {
      id: "prod-jabon-cafe",
      name: "Jabón Artesanal Exfoliante de Café Dominicano & Avena",
      category: "Cuidado Corporal",
      badge: "ARTESANAL ☕",
      rating: 4.9,
      reviewsCount: 84,
      image: "assets/images/jabon_cafe.jpg",
      description: "Elaborado a mano con café puro de altura de Jarabacoa y avena coloidal. Remueve suavemente células muertas, activa la circulación y tonifica la piel dejándola sedosa.",
      features: [
        "Café orgánico 100% de la cordillera dominicana",
        "Avena coloidal suavizante y antiinflamatoria",
        "Base de aceites vegetales saponificados en frío",
        "Biodegradable, sin sulfatos ni microplásticos"
      ],
      originalPrice: 950.00,
      price: 650.00,
      discount: 300.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Barra (120g)",
          price: 650.00,
          originalPrice: 950.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack 2 Barras (Ahorro)",
          price: 1150.00,
          originalPrice: 1900.00,
          popular: true,
          tag: "DUO AHORRO"
        }
      ]
    },
    {
      id: "prod-tonico-rosas",
      name: "Tónico Facial Calmante de Rosas Damascenas & Manzanilla",
      category: "Cuidado Facial",
      badge: "CALMANTE 🌸",
      rating: 4.8,
      reviewsCount: 72,
      image: "assets/images/tonico_rosas.jpg",
      description: "Destilado botánico puro que equilibra el pH, cierra poros dilatados y calma rojeces e irritaciones. Aporta una sensación de frescura inmediata a cualquier hora del día.",
      features: [
        "Agua destilada de rosas y extracto de manzanilla",
        "0% alcohol, sin astringentes químicos",
        "Bruma ultrafina con atomizador de lujo",
        "Ideal para pieles sensibles, secas o con rosácea"
      ],
      originalPrice: 1750.00,
      price: 1250.00,
      discount: 500.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (100ml)",
          price: 1250.00,
          originalPrice: 1750.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack 2 Frascos (Ahorra RD$ 400)",
          price: 2100.00,
          originalPrice: 3500.00,
          popular: true,
          tag: "OFERTA DÚO"
        }
      ]
    },
    {
      id: "prod-mascarilla-coco",
      name: "Mascarilla Capilar Reparadora de Coco & Manteca de Karité",
      category: "Cuidado Capilar",
      badge: "NUTRICIÓN INTENSA 🥥",
      rating: 4.9,
      reviewsCount: 110,
      image: "assets/images/mascarilla_coco.jpg",
      description: "Tratamiento intensivo para cabello seco, maltratado, rizado o con procesos químicos. Penetra profundamente en la fibra capilar, sella las puntas y devuelve elasticidad.",
      features: [
        "Manteca de karité pura de comercio justo",
        "Aceite de coco virgen prensado en frío",
        "Control antifrizz duradero en clima caribeño",
        "Sin siliconas, sulfatos ni parabenos"
      ],
      originalPrice: 2200.00,
      price: 1650.00,
      discount: 550.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (200ml)",
          price: 1650.00,
          originalPrice: 2200.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Tratamiento Doble (Ahorra RD$ 500)",
          price: 2800.00,
          originalPrice: 4400.00,
          popular: true,
          tag: "MEJOR OPCIÓN"
        }
      ]
    },
    {
      id: "prod-exfoliante-cacao",
      name: "Exfoliante Corporal de Sal Rosa del Himalaya & Cacao Orgánico",
      category: "Cuidado Corporal",
      badge: "SPA EN CASA 🍫",
      rating: 4.8,
      reviewsCount: 65,
      image: "assets/images/exfoliante_cacao.jpg",
      description: "Experiencia sensorial tipo spa que renueva y oxigena la epidermis. Los cristales minerales de sal eliminan impurezas mientras los antioxidantes del cacao nutren a fondo.",
      features: [
        "Cacao orgánico dominicano rico en polifenoles",
        "Sal rosa del Himalaya con 84 minerales esenciales",
        "Aceite de almendras dulces ultrahidratante",
        "Aroma reconfortante a chocolate y vainilla natural"
      ],
      originalPrice: 1850.00,
      price: 1350.00,
      discount: 500.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (250g)",
          price: 1350.00,
          originalPrice: 1850.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack Spa Dúo (Ahorra RD$ 400)",
          price: 2300.00,
          originalPrice: 3700.00,
          popular: true,
          tag: "PACK SPA"
        }
      ]
    },
    {
      id: "prod-protector-solar",
      name: "Protector Solar Mineral Botánico SPF 50+ Invisible",
      category: "Cuidado Facial",
      badge: "MINERAL SPF 50+ ☀️",
      rating: 4.9,
      reviewsCount: 132,
      image: "assets/images/protector_solar.jpg",
      description: "Protección física de amplio espectro contra rayos UVA/UVB y luz azul. Elaborado con óxido de zinc no-nano que se difumina sin dejar rastro blanco ni sensación grasosa.",
      features: [
        "Filtro mineral 100% físico seguro para arrecifes",
        "Acabado mate sedoso, apto bajo el maquillaje",
        "Extracto botánico de té verde antioxidante",
        "Resistente al agua y sudor por 80 minutos"
      ],
      originalPrice: 2650.00,
      price: 1950.00,
      discount: 700.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (118ml)",
          price: 1950.00,
          originalPrice: 2650.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack 2 Protectores (Ahorra RD$ 600)",
          price: 3300.00,
          originalPrice: 5300.00,
          popular: true,
          tag: "PROTECCIÓN TOTAL"
        }
      ]
    },
    {
      id: "prod-mascarilla-arcilla",
      name: "Mascarilla Facial Purificante de Arcilla Verde & Árbol de Té",
      category: "Cuidado Facial",
      badge: "DETOX ANTI-ACNÉ 🌿",
      rating: 4.7,
      reviewsCount: 58,
      image: "assets/images/mascarilla_arcilla.jpg",
      description: "Tratamiento desintoxicante de alta eficacia para pieles mixtas o con tendencia acneica. Desobstruye poros, regula la producción de grasa y calma brotes activos.",
      features: [
        "Arcilla verde francesa secada naturalmente al sol",
        "Aceite puro de árbol de té antibacteriano",
        "Matifica la zona T sin resecar la piel",
        "Sensación refrescante y descongestionante"
      ],
      originalPrice: 1600.00,
      price: 1190.00,
      discount: 410.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (100g)",
          price: 1190.00,
          originalPrice: 1600.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack Purificante Dúo",
          price: 1990.00,
          originalPrice: 3200.00,
          popular: true,
          tag: "DÚO DETOX"
        }
      ]
    },
    {
      id: "prod-bruma-lavanda",
      name: "Bruma Botánica Relajante de Lavanda Francesa & Melisa",
      category: "Bienestar & Aromaterapia",
      badge: "SUEÑO & RELAX 🌙",
      rating: 4.9,
      reviewsCount: 91,
      image: "assets/images/bruma_lavanda.jpg",
      description: "Elixir aromaterapéutico formulado para inducir el descanso y calmar la mente. Rociar en almohadas, sábanas o el ambiente antes de dormir para un descanso profundo.",
      features: [
        "Aceite esencial de Lavanda angustifolia de cultivo biológico",
        "Extracto de melisa y manzanilla calmante",
        "Reduce la tensión nerviosa y facilita el sueño",
        "No mancha tejidos ni textiles del hogar"
      ],
      originalPrice: 1400.00,
      price: 990.00,
      discount: 410.00,
      featured: false,
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (100ml)",
          price: 990.00,
          originalPrice: 1400.00,
          popular: false
        },
        {
          quantity: 2,
          label: "Pack Relajación (Ahorro)",
          price: 1690.00,
          originalPrice: 2800.00,
          popular: true,
          tag: "RELAX TOTAL"
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
