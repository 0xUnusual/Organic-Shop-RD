/**
 * Configuración Central de Organic Shop RD
 * Catálogo enriquecido con tratamientos, guías de beneficios, modo de uso y paquetes por producto.
 */

const CONFIG = {
  storeName: "Organic Shop RD",
  slogan: "🌿 Belleza, Salud y Bienestar 100% Orgánico en República Dominicana",
  whatsappNumber: "18494720790", // Número oficial con código de país para WhatsApp (+1 849-472-0790)
  whatsappDisplay: "(849) 472-0790",
  currency: "RD$",
  shippingCost: 0, // 0 = Envío Gratis
  shippingText: "Gratis",
  
  // Oferta complementaria (Order Bump)
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

  // Catálogo Completo de Productos Orgánicos Certificados
  products: [
    {
      id: "prod-15day-cleanse",
      name: "15 Day Cleanse · Limpiador de Colon & Pérdida de Peso",
      category: "Salud & Bienestar",
      badge: "MÁS VENDIDO 🔥",
      rating: 4.9,
      reviewsCount: 248,
      image: "assets/images/cleanse_15_day.jpg",
      description: "Fórmula herbal botánica avanzada diseñada para desintoxicar el tracto digestivo, expulsar toxinas acumuladas, combatir el estreñimiento, desinflamar el vientre y reactivar el metabolismo de manera 100% natural.",
      features: [
        "Limpieza profunda del colon en solo 15 días",
        "Alivia pesadez estomacal, gases e hinchazón",
        "Favorece la pérdida de peso y vientre plano",
        "Fórmula suave con hierbas reguladoras y probióticos"
      ],
      originalPrice: 2800.00,
      price: 1985.00,
      discount: 815.00,
      featured: true,
      usageType: "tomar",
      usageTitle: "¿Cómo tomar el Limpiador de Colon 15 Day Cleanse?",
      usageSubtitle: "Guía paso a paso para un tratamiento seguro y de máxima eficacia",
      usageSteps: [
        {
          step: "1",
          title: "Dosis Inicial (Días 1 a 4)",
          text: "Tomar 1 cápsula antes de acostarse acompañada de un vaso lleno de agua (8 oz) para evaluar la respuesta y tolerancia de tu organismo."
        },
        {
          step: "2",
          title: "Dosis Completa (Días 5 a 15)",
          text: "Tomar de 1 a 2 cápsulas diarias por la noche antes de dormir con agua abundante durante el resto del tratamiento de 15 días."
        },
        {
          step: "3",
          title: "Hidratación Clave",
          text: "Bebe de 2 a 2.5 litros de agua al día durante todo el ciclo. El agua activa los ingredientes botánicos y facilita la eliminación de toxinas."
        },
        {
          step: "4",
          title: "Ciclo y Descanso",
          text: "Completar los 15 días consecutivos. Dejar descansar el sistema digestivo de 6 a 8 semanas antes de iniciar un nuevo ciclo si se requiere."
        }
      ],
      usageProTip: "💡 Consejo Pro: Consume alimentos ligeros y ricos en fibra durante los 15 días para potenciar la ligereza y energía.",
      benefitsDetailed: [
        {
          icon: "🍃",
          title: "Desintoxicación Intestinal Profunda",
          desc: "Elimina residuos acumulados en las paredes del colon y purifica el tracto digestivo suavemente sin cólicos agresivos."
        },
        {
          icon: "⚖️",
          title: "Vientre Plano & Pérdida de Peso",
          desc: "Expulsa retenciones de desechos e inflamación intestinal, reduciendo medidas en la zona abdominal desde la primera semana."
        },
        {
          icon: "⚡",
          title: "Reactivación Metabólica & Vitalidad",
          desc: "Aliviar la sobrecarga de toxinas permite que tu cuerpo absorba mejor los nutrientes, combatiendo la fatiga crónica y pesadez."
        },
        {
          icon: "🛡️",
          title: "Regulación Digestiva & Flora Saludable",
          desc: "Favorece evacuaciones regulares y previene el estreñimiento ocasional gracias al aporte de probióticos y fibra soluble."
        }
      ],
      ingredients: "Cáscara Sagrada, Hojas de Senna, Linaza Orgánica, Extracto de Aloe Vera liofilizado, Semillas de Hinojo, Psyllium Husk y Lactobacillus acidophilus.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco",
          treatmentBadge: "TRATAMIENTO · 15 DÍAS",
          subtitle: "Limpiador de colon · pérdida de peso",
          price: 1985.00,
          originalPrice: 2800.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "2 Frascos",
          treatmentBadge: "TRATAMIENTO · 30 DÍAS",
          subtitle: "Limpiador de colon · pérdida de peso",
          price: 2995.00,
          originalPrice: 5600.00,
          popular: true,
          tag: "🔥 MÁS POPULAR",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "3 Frascos",
          treatmentBadge: "TRATAMIENTO · 45 DÍAS",
          subtitle: "Limpiador de colon · pérdida de peso",
          price: 3990.00,
          originalPrice: 8400.00,
          popular: false,
          tag: "PAQUETE FAMILIAR",
          bottleCount: 3
        }
      ]
    },
    {
      id: "prod-serum-organico",
      name: "Serum Facial Rejuvenecedor Botánico 100% Orgánico",
      category: "Cuidado Facial",
      badge: "FAVORITO FACIAL 🌟",
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Serum Facial Rejuvenecedor?",
      usageSubtitle: "Rutina facial botánica para una absorción y luminosidad óptimas",
      usageSteps: [
        {
          step: "1",
          title: "Limpieza Previa",
          text: "Lava tu rostro con agua tibia y jabón suave botánico. Seca dando toques suaves con una toalla limpia."
        },
        {
          step: "2",
          title: "Dosificación Exacta",
          text: "Aplica de 3 a 4 gotas directamente sobre la frente, mejillas y cuello con el gotero sin tocar la piel."
        },
        {
          step: "3",
          title: "Masaje Ascendente",
          text: "Extiende suavemente con movimientos circulares ascendentes hacia las sienes para favorecer la firmeza."
        },
        {
          step: "4",
          title: "Absorción y Frecuencia",
          text: "Deja absorber durante 2 minutos. Aplica dos veces al día: en la mañana antes del protector solar y por la noche."
        }
      ],
      usageProTip: "💡 Consejo Pro: Aplica sobre la piel ligeramente húmeda tras el tónico para sellar el doble de hidratación.",
      benefitsDetailed: [
        {
          icon: "✨",
          title: "Luminosidad & Tono Uniforme",
          desc: "Difumina manchas superficiales y revitaliza la piel apagada aportando un brillo natural y saludable."
        },
        {
          icon: "🌿",
          title: "Efecto Lifting & Elasticidad",
          desc: "Estimula la síntesis de colágeno natural, atenuando líneas de expresión y aportando firmeza duradera."
        },
        {
          icon: "💧",
          title: "Nutrición Celular Profunda",
          desc: "Sus lípidos botánicos similares a la piel nutren las capas dérmicas sin dejar residuos grasos."
        },
        {
          icon: "🛡️",
          title: "Escudo Antioxidante",
          desc: "Protege las células contra los radicales libres, la polución urbana y el envejecimiento prematuro."
        }
      ],
      ingredients: "Aceite de Jojoba virgen prensado en frío, Vitamina E (Tocoferol vegetal), Aceite de Rosa Mosqueta silvestre, Escualano vegetal de oliva y Aceite esencial de Incienso.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco",
          treatmentBadge: "TRATAMIENTO · 1 MES",
          subtitle: "Serum rejuvenecedor · luminosidad & firmeza",
          price: 2199.00,
          originalPrice: 2990.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "2 Frascos",
          treatmentBadge: "TRATAMIENTO · 2 MESES",
          subtitle: "Serum rejuvenecedor · ahorra RD$ 700",
          price: 3698.00,
          originalPrice: 5980.00,
          popular: true,
          tag: "🔥 MEJOR VALOR",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "3 Frascos",
          treatmentBadge: "TRATAMIENTO · 3 MESES",
          subtitle: "Serum rejuvenecedor · paquete familiar",
          price: 4398.00,
          originalPrice: 8970.00,
          popular: false,
          tag: "PAQUETE FAMILIAR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar la Crema Hidratante Botánica?",
      usageSubtitle: "Hidratación fresca paso a paso para el clima caribeño",
      usageSteps: [
        {
          step: "1",
          title: "Preparación",
          text: "Aplica tras la limpieza facial o después de tu serum diario."
        },
        {
          step: "2",
          title: "Cantidad Justa",
          text: "Toma una porción del tamaño de una moneda de 1 peso con la espátula o yema limpia."
        },
        {
          step: "3",
          title: "Distribución",
          text: "Distribuye con suaves toques en frente, mejillas, nariz, barbilla y cuello."
        },
        {
          step: "4",
          title: "Absorción",
          text: "Masajea hasta su total absorción. Sensación mate y refrescante en menos de 60 segundos."
        }
      ],
      usageProTip: "💡 Consejo Pro: En días calurosos, guárdala en la nevera para un efecto tensor y descongestionante supremo.",
      benefitsDetailed: [
        {
          icon: "💧",
          title: "Hidratación 24 Horas",
          desc: "Retiene la humedad natural de la piel evitando la resequedad provocada por el calor y aire acondicionado."
        },
        {
          icon: "❄️",
          title: "Calma Rojeces & Irritaciones",
          desc: "El aloe vera orgánico calma quemaduras leves y rojeces, ideal tras exposición solar."
        },
        {
          icon: "🌿",
          title: "Barrera Cutánea Fuerte",
          desc: "Restaura el manto lipídico defensivo protegiendo contra impurezas y bacterias ambientales."
        },
        {
          icon: "✨",
          title: "Tacto de Seda No Grasoso",
          desc: "Fórmula de rápida absorción diseñada para no tapar los poros en el clima de República Dominicana."
        }
      ],
      ingredients: "Gel de Aloe Vera Barbadensis 100% orgánico, Hidrolato de Menta Piperita, Manteca de Karité refinada, Ácido Hialurónico vegetal y Aceite de Almendras.",
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (200g)",
          treatmentBadge: "TRATAMIENTO · 1 MES",
          subtitle: "Crema botánica · hidratación 24h",
          price: 1850.00,
          originalPrice: 2500.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "2 Tarros (400g)",
          treatmentBadge: "TRATAMIENTO · 2 MESES",
          subtitle: "Crema botánica · ahorra RD$ 500",
          price: 3200.00,
          originalPrice: 5000.00,
          popular: true,
          tag: "OFERTA DÚO",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "3 Tarros (600g)",
          treatmentBadge: "TRATAMIENTO · 3 MESES",
          subtitle: "Crema botánica · pack trimestral",
          price: 4200.00,
          originalPrice: 7500.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Aceite de Romero & Menta?",
      usageSubtitle: "Terapia folicular para frenar la caída y activar nuevo crecimiento",
      usageSteps: [
        {
          step: "1",
          title: "Separar en Secciones",
          text: "Divide tu cabello seco o húmedo en 4 o más secciones para acceder cómodamente a la raíz."
        },
        {
          step: "2",
          title: "Gotero a la Raíz",
          text: "Coloca unas gotas directamente sobre el cuero cabelludo o en las zonas despobladas."
        },
        {
          step: "3",
          title: "Masaje Estimulante",
          text: "Masajea con las yemas de los dedos durante 3 a 5 minutos en movimientos circulares para activar el flujo sanguíneo."
        },
        {
          step: "4",
          title: "Reposo y Lavado",
          text: "Deja actuar mínimo 45 minutos (o durante toda la noche con gorro) y lava con champú suave. Repite 3 veces por semana."
        }
      ],
      usageProTip: "💡 Para cejas y pestañas: Aplica una micro-gota en la noche con un hisopo limpio.",
      benefitsDetailed: [
        {
          icon: "💆‍♀️",
          title: "Frena la Caída del Cabello",
          desc: "Fortalece las raíces debilitadas reduciendo notablemente los cabellos que quedan en el cepillo."
        },
        {
          icon: "🌱",
          title: "Estimula Nacimiento Nuevo",
          desc: "El romero silvestre reactiva los folículos en reposo, generando cabello nuevo más grueso y resistente."
        },
        {
          icon: "✨",
          title: "Densidad en Cejas y Barba",
          desc: "Excelente para rellenar huecos en cejas y barbas de forma totalmente orgánica y segura."
        },
        {
          icon: "🌿",
          title: "Combate la Caspa y Picazón",
          desc: "Propiedades antimicrobianas naturales de la menta y romero que purifican el cuero cabelludo."
        }
      ],
      ingredients: "Aceite macerado de Romero (Rosmarinus officinalis), Aceite esencial de Menta piperita orgánica, Aceite de Ricino virgen prensado en frío y Biotina vegetal.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (60ml)",
          treatmentBadge: "TRATAMIENTO · 1 MES",
          subtitle: "Aceite de romero · crecimiento capilar",
          price: 1490.00,
          originalPrice: 1990.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "2 Frascos (120ml)",
          treatmentBadge: "TRATAMIENTO · 2 MESES",
          subtitle: "Aceite de romero · ahorra RD$ 400",
          price: 2580.00,
          originalPrice: 3980.00,
          popular: true,
          tag: "🔥 PACK RECOMENDADO",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "3 Frascos (180ml)",
          treatmentBadge: "TRATAMIENTO · 3 MESES",
          subtitle: "Aceite de romero · máximo crecimiento",
          price: 3490.00,
          originalPrice: 5970.00,
          popular: false,
          tag: "MEJOR AHORRO",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Jabón Exfoliante de Café?",
      usageSubtitle: "Exfoliación energizante corporal bajo la ducha",
      usageSteps: [
        {
          step: "1",
          title: "Mojar la Piel",
          text: "Humedece el cuerpo con agua tibia durante 2 minutos para abrir ligeramente los poros."
        },
        {
          step: "2",
          title: "Masaje Exfoliante",
          text: "Frota la barra con movimientos circulares en piernas, glúteos, brazos y zonas con celulitis o asperezas."
        },
        {
          step: "3",
          title: "Acción de la Espuma",
          text: "Deja reposar la espuma con extractos de café durante 1 minuto para activar la circulación."
        },
        {
          step: "4",
          title: "Enjuague",
          text: "Aclara con agua fresca y siente de inmediato la piel suave y renovada. Usar 3 a 4 veces por semana."
        }
      ],
      usageProTip: "💡 Mantén la barra en una jabonera con drenaje para que dure el doble de tiempo.",
      benefitsDetailed: [
        {
          icon: "☕",
          title: "Eliminación de Células Muertas",
          desc: "Partículas finas de café que desprenden impurezas sin agredir la barrera protectora dérmica."
        },
        {
          icon: "✨",
          title: "Tonificación Anticelulítica",
          desc: "La cafeína estimula el drenaje linfático superficial, ayudando a suavizar la piel de naranja."
        },
        {
          icon: "🌾",
          title: "Calma de Avena Coloidal",
          desc: "Compensa la exfoliación aportando alivio y sedosidad inmediata a pieles sensibles."
        },
        {
          icon: "🌿",
          title: "100% Biodegradable",
          desc: "Elaborado sin sulfatos sintéticos ni microesferas de plástico que contaminen las aguas."
        }
      ],
      ingredients: "Aceite de Coco virgen saponificado, Café orgánico de Jarabacoa molido, Avena coloidal, Manteca de Cacao dominicano y Aceite esencial de Vainilla natural.",
      packs: [
        {
          quantity: 1,
          label: "1 Barra (120g)",
          treatmentBadge: "TRATAMIENTO INDIVIDUAL",
          subtitle: "Jabón exfoliante de café de Jarabacoa",
          price: 650.00,
          originalPrice: 950.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack 2 Barras (240g)",
          treatmentBadge: "DUO EXFOLIANTE",
          subtitle: "Jabón de café · ahorra RD$ 150",
          price: 1150.00,
          originalPrice: 1900.00,
          popular: true,
          tag: "DUO AHORRO",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack 3 Barras (360g)",
          treatmentBadge: "PACK FAMILIAR SPA",
          subtitle: "Jabón de café · 3 barras para el hogar",
          price: 1590.00,
          originalPrice: 2850.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Tónico Facial Calmante?",
      usageSubtitle: "Equilibrio y frescura para poros y pH dérmico",
      usageSteps: [
        {
          step: "1",
          title: "Distancia Adecuada",
          text: "Sostén el atomizador a unos 15 o 20 cm del rostro con los ojos cerrados."
        },
        {
          step: "2",
          title: "Bruma Suave",
          text: "Pulveriza de 2 a 3 veces de manera uniforme sobre todo el rostro, cuello y escote."
        },
        {
          step: "3",
          title: "Toques con las Yemas",
          text: "Presiona delicadamente con las palmas de las manos para facilitar la asimilación botánica."
        },
        {
          step: "4",
          title: "Uso Versátil",
          text: "Úsalo tras lavar la cara, para fijar el maquillaje o para refrescarte del calor a lo largo del día."
        }
      ],
      usageProTip: "💡 Rocíalo sobre tu rostro antes de aplicar tu serum o crema para potenciar la absorción.",
      benefitsDetailed: [
        {
          icon: "🌸",
          title: "Equilibrio del pH Natural",
          desc: "Restaura la acidez fisiológica protectora tras la limpieza, previniendo bacterias."
        },
        {
          icon: "🔍",
          title: "Cierre Visual de Poros",
          desc: "Efecto tensor suave que alisa la textura dérmica y afina visiblemente los poros."
        },
        {
          icon: "🌼",
          title: "Alivio de Rojeces & Rosácea",
          desc: "La manzanilla calma pieles con tendencia a reactividad o ardor por el calor."
        },
        {
          icon: "💧",
          title: "Cero Alcohol ni Irritantes",
          desc: "No reseca ni tirantea, dejando una fragancia botánica natural relajante."
        }
      ],
      ingredients: "Hidrolato puro de Rosa Damascena, Extracto de Manzanilla silvestre (Chamomilla recutita), Glicerina vegetal y Aloe Vera.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (100ml)",
          treatmentBadge: "TRATAMIENTO DIARIO",
          subtitle: "Tónico de rosas · equilibrio y calma",
          price: 1250.00,
          originalPrice: 1750.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack 2 Frascos (200ml)",
          treatmentBadge: "OFERTA DÚO",
          subtitle: "Tónico de rosas · ahorra RD$ 400",
          price: 2100.00,
          originalPrice: 3500.00,
          popular: true,
          tag: "OFERTA DÚO",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack 3 Frascos (300ml)",
          treatmentBadge: "PACK FAMILIAR",
          subtitle: "Tónico de rosas · ahorro máximo",
          price: 2890.00,
          originalPrice: 5250.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar la Mascarilla Capilar Reparadora?",
      usageSubtitle: "Nutrición profunda para cabellos procesados, rizados o resecos",
      usageSteps: [
        {
          step: "1",
          title: "Lavado y Retiro de Agua",
          text: "Lava con champú suave y retira el exceso de agua con una toalla sin frotar."
        },
        {
          step: "2",
          title: "Medios a Puntas",
          text: "Aplica de medios a puntas desenredando suavemente con los dedos o peine de dientes anchos."
        },
        {
          step: "3",
          title: "Tiempo de Acción",
          text: "Deja actuar entre 15 y 20 minutos (puedes usar un gorro térmico o toalla tibia para mayor absorción)."
        },
        {
          step: "4",
          title: "Aclarado Abundante",
          text: "Enjuaga con abundante agua tibia o fría. Sentirás el cabello suave, elástico y brillante. Usar 1 a 2 veces por semana."
        }
      ],
      usageProTip: "💡 Para cabello extra rizado o reseco, puedes dejar una cantidad mínima en las puntas como crema de peinar sin enjuague.",
      benefitsDetailed: [
        {
          icon: "🥥",
          title: "Reparación de la Fibra Capilar",
          desc: "Rellena las fisuras de cabellos maltratados por decoloraciones, tintes o calor excesivo."
        },
        {
          icon: "🛡️",
          title: "Control Antifrizz Extremo",
          desc: "Crea un blindaje protector contra la humedad de la República Dominicana, evitando que el cabello se esponje."
        },
        {
          icon: "✨",
          title: "Brillo & Desenredo Inmediato",
          desc: "Puntas selladas y tacto sedoso sin necesidad de siliconas pesadas que ahoguen la hebra."
        },
        {
          icon: "🌿",
          title: "Definición para Rizos y Ondas",
          desc: "Aporta peso saludable y elasticidad para rizos vivos y con rebote natural."
        }
      ],
      ingredients: "Manteca de Karité orgánica (Butyrospermum parkii), Aceite de Coco virgen, Aceite de Argán puro, Proteína de Trigo hidrolizada y Vitamina B5 (Pantenol).",
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (200ml)",
          treatmentBadge: "TRATAMIENTO MENSUAL",
          subtitle: "Mascarilla capilar · nutrición intensa",
          price: 1650.00,
          originalPrice: 2200.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Tratamiento Doble (400ml)",
          treatmentBadge: "TRATAMIENTO DOBLE",
          subtitle: "Mascarilla capilar · ahorra RD$ 500",
          price: 2800.00,
          originalPrice: 4400.00,
          popular: true,
          tag: "MEJOR OPCIÓN",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Tratamiento Completo (600ml)",
          treatmentBadge: "TRATAMIENTO COMPLETO",
          subtitle: "Mascarilla capilar · pack familiar",
          price: 3750.00,
          originalPrice: 6600.00,
          popular: false,
          tag: "PAQUETE FAMILIAR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Exfoliante de Sal Rosa & Cacao?",
      usageSubtitle: "Ritual corporal de renovación y descanso",
      usageSteps: [
        {
          step: "1",
          title: "Humedecer la Piel",
          text: "Entra a la ducha y deja que el agua tibia ablande las capas superficiales de la piel."
        },
        {
          step: "2",
          title: "Aplicación y Masaje",
          text: "Toma una porción generosa y frota en movimientos circulares ascendentes desde los tobillos hacia el corazón."
        },
        {
          step: "3",
          title: "Énfasis en Áreas Ásperas",
          text: "Dedica un masaje extra a codos, rodillas y talones para eliminar durezas."
        },
        {
          step: "4",
          title: "Aclarado Suave",
          text: "Enjuaga solo con agua sin jabón adicional para que los aceites de cacao y almendras nutran tu piel."
        }
      ],
      usageProTip: "💡 Úsalo la noche previa a afeitarte o depilarte para prevenir vellos encarnados por completo.",
      benefitsDetailed: [
        {
          icon: "🍫",
          title: "Poder Antioxidante del Cacao",
          desc: "El cacao puro combate el envejecimiento cutáneo y mejora la circulación celular."
        },
        {
          icon: "💎",
          title: "84 Minerales de Sal del Himalaya",
          desc: "Oxigena y desintoxica la piel, aliviando tensiones musculares acumuladas."
        },
        {
          icon: "🌸",
          title: "Piel Tersa de Bebé",
          desc: "Elimina de raíz la piel opaca y áspera dejando un acabado suave e hidratado."
        },
        {
          icon: "🧖‍♀️",
          title: "Aromaterapia Reconfortante",
          desc: "Aroma envolvente a chocolate puro que calma la mente y alivia el estrés diario."
        }
      ],
      ingredients: "Sal Rosa del Himalaya de grano fino, Polvo de Cacao criollo orgánico, Aceite de Almendras dulces, Aceite de Coco virgen y Vitamina E.",
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (250g)",
          treatmentBadge: "EXPERIENCIA SPA",
          subtitle: "Exfoliante de sal rosa & cacao",
          price: 1350.00,
          originalPrice: 1850.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack Spa Dúo (500g)",
          treatmentBadge: "PACK SPA DÚO",
          subtitle: "Exfoliante de cacao · ahorra RD$ 400",
          price: 2300.00,
          originalPrice: 3700.00,
          popular: true,
          tag: "PACK SPA",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack Spa Total (750g)",
          treatmentBadge: "PACK SPA TOTAL",
          subtitle: "Exfoliante de cacao · triple ahorro",
          price: 3190.00,
          originalPrice: 5550.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar el Protector Solar Mineral SPF 50+?",
      usageSubtitle: "Protección solar física diaria sin manchas blancas",
      usageSteps: [
        {
          step: "1",
          title: "Último Paso de Rutina",
          text: "Aplica siempre por la mañana después de tu crema hidratante o serum facial."
        },
        {
          step: "2",
          title: "Regla de los Dos Dedos",
          text: "Dosifica la cantidad de dos líneas sobre tus dedos índice y medio para rostro y cuello."
        },
        {
          step: "3",
          title: "Distribución Uniforme",
          text: "Extiende suavemente cubriendo frente, mejillas, nariz, orejas y cuello."
        },
        {
          step: "4",
          title: "Reaplicación",
          text: "Reaplica cada 2 a 3 horas si estás al aire libre, tras sudoración o nadar en la playa o piscina."
        }
      ],
      usageProTip: "💡 Su fórmula física actúa de forma inmediata al aplicarse, no requiere esperar 20 minutos como los filtros químicos.",
      benefitsDetailed: [
        {
          icon: "☀️",
          title: "Bloqueo Amplio Espectro SPF 50+",
          desc: "Filtro de Óxido de Zinc mineral que refleja los rayos UVA (manchas y arrugas) y UVB (quemaduras)."
        },
        {
          icon: "📱",
          title: "Protección contra Luz Azul",
          desc: "Defiende la piel frente a las pantallas de móviles y computadoras que aceleran el fotoenvejecimiento."
        },
        {
          icon: "🪸",
          title: "Respetuoso con Arrecifes (Reef Safe)",
          desc: "Sin oxibenzona ni octinoxato que dañan los corales y ecosistemas marinos del Caribe."
        },
        {
          icon: "✨",
          title: "Cero Rastro Blanco ni Grasa",
          desc: "Se funde con el tono de tu piel dejando un acabado mate aterciopelado perfecto para el día a día."
        }
      ],
      ingredients: "Óxido de Zinc No-Nano al 20%, Extracto de Té Verde orgánico, Aceite de Jojoba, Cera de Candelilla vegetal y Vitamina E.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (118ml)",
          treatmentBadge: "PROTECCIÓN 1 MES",
          subtitle: "Protector solar mineral SPF 50+",
          price: 1950.00,
          originalPrice: 2650.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack 2 Protectores (236ml)",
          treatmentBadge: "PROTECCIÓN TOTAL DÚO",
          subtitle: "Protector solar · ahorra RD$ 600",
          price: 3300.00,
          originalPrice: 5300.00,
          popular: true,
          tag: "PROTECCIÓN TOTAL",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack 3 Protectores (354ml)",
          treatmentBadge: "PROTECCIÓN FAMILIAR",
          subtitle: "Protector solar · pack verano seguro",
          price: 4490.00,
          originalPrice: 7950.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar la Mascarilla de Arcilla Verde?",
      usageSubtitle: "Purificación profunda y control de impurezas",
      usageSteps: [
        {
          step: "1",
          title: "Limpieza Previa",
          text: "Lava tu rostro con agua tibia para retirar impurezas superficiales."
        },
        {
          step: "2",
          title: "Aplicación Homogénea",
          text: "Extiende una capa uniforme con brocha o dedos limpios, evitando el contorno de ojos y labios."
        },
        {
          step: "3",
          title: "Tiempo de Reposo",
          text: "Deja actuar de 10 a 12 minutos. No dejes que se seque hasta agrietarse para no deshidratar."
        },
        {
          step: "4",
          title: "Enjuague con Agua Tibia",
          text: "Retira con agua tibia usando una esponja suave y continúa con tu tónico hidratante. 1 a 2 veces por semana."
        }
      ],
      usageProTip: "💡 Si tienes piel mixta, aplícala únicamente en la zona T (frente, nariz y barbilla).",
      benefitsDetailed: [
        {
          icon: "🌿",
          title: "Absorción de Grasa & Brillo",
          desc: "Elimina el sebo acumulado y matifica la piel durante días."
        },
        {
          icon: "🔍",
          title: "Desobstrucción de Poros",
          desc: "Arrastra puntos negros y suciedad profunda acumulada en los poros."
        },
        {
          icon: "🛡️",
          title: "Efecto Antibacteriano Tea Tree",
          desc: "Combate las bacterias causantes del acné y acelera la cicatrización de granitos."
        },
        {
          icon: "✨",
          title: "Piel Limpia y Fresca",
          desc: "Deja una sensación descongestionada y libre de toxinas ambientales."
        }
      ],
      ingredients: "Arcilla Verde Montmorillonita pura, Aceite esencial de Árbol de Té (Melaleuca alternifolia), Extracto de Romero y Glicerina vegetal.",
      packs: [
        {
          quantity: 1,
          label: "1 Tarro (100g)",
          treatmentBadge: "TRATAMIENTO DETOX",
          subtitle: "Mascarilla purificante de arcilla verde",
          price: 1190.00,
          originalPrice: 1600.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack Purificante Dúo (200g)",
          treatmentBadge: "DÚO DETOX ANTI-ACNÉ",
          subtitle: "Mascarilla de arcilla · ahorra RD$ 390",
          price: 1990.00,
          originalPrice: 3200.00,
          popular: true,
          tag: "DÚO DETOX",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack Detox Total (300g)",
          treatmentBadge: "PACK DETOX TOTAL",
          subtitle: "Mascarilla de arcilla · pack familiar",
          price: 2750.00,
          originalPrice: 4800.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
        }
      ]
    },
    {
      id: "prod-bruma-lavanda",
      name: "Bruma Botánica Relajante de Lavanda Francesa & Melisa",
      category: "Salud & Bienestar",
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
      usageType: "aplicar",
      usageTitle: "¿Cómo aplicar la Bruma Relajante de Lavanda?",
      usageSubtitle: "Aromaterapia nocturna para conciliar un sueño reparador",
      usageSteps: [
        {
          step: "1",
          title: "Agitar Suavemente",
          text: "Agita el frasco para mezclar los aceites esenciales de lavanda y melisa."
        },
        {
          step: "2",
          title: "Rociar la Almohada",
          text: "Aplica de 3 a 4 pulverizaciones sobre tu almohada y sábanas 10 minutos antes de acostarte."
        },
        {
          step: "3",
          title: "Ambiente o Muñecas",
          text: "También puedes rociar el aire de tu habitación o frotar una pequeña cantidad en el interior de tus muñecas."
        },
        {
          step: "4",
          title: "Inhalar Profundamente",
          text: "Cierra los ojos e inhala el aroma botánico para desacelerar el ritmo cardíaco y conciliar el sueño."
        }
      ],
      usageProTip: "💡 Fórmula segura que no deja manchas grasas en almohadas, pijamas ni sábanas blancas.",
      benefitsDetailed: [
        {
          icon: "🌙",
          title: "Inducción al Sueño Profundo",
          desc: "Las moléculas aromáticas de lavanda activan neurotransmisores de relajación cerebral."
        },
        {
          icon: "🕊️",
          title: "Reducción de Estrés y Tensión",
          desc: "Alivia el estrés mental acumulado tras una jornada agotadora."
        },
        {
          icon: "🌿",
          title: "100% Pura Sin Fragancias Químicas",
          desc: "Sin aromas artificiales que provoquen estornudos o dolores de cabeza."
        },
        {
          icon: "✨",
          title: "Descanso Real y Despertar Energético",
          desc: "Dormirás mejor y te levantarás fresco sin sensación de pesadez."
        }
      ],
      ingredients: "Hidrolato de Lavanda biológica (Lavandula angustifolia), Aceite esencial de Melisa pura, Hidrolato de Manzanilla y Glicerina vegetal.",
      packs: [
        {
          quantity: 1,
          label: "1 Frasco (100ml)",
          treatmentBadge: "RELAX PERSONAL",
          subtitle: "Bruma de lavanda · descanso nocturno",
          price: 990.00,
          originalPrice: 1400.00,
          popular: false,
          bottleCount: 1
        },
        {
          quantity: 2,
          label: "Pack Relajación Dúo (200ml)",
          treatmentBadge: "DÚO SUEÑO PROFUNDO",
          subtitle: "Bruma de lavanda · ahorra RD$ 290",
          price: 1690.00,
          originalPrice: 2800.00,
          popular: true,
          tag: "RELAX TOTAL",
          bottleCount: 2
        },
        {
          quantity: 3,
          label: "Pack Sueño Familiar (300ml)",
          treatmentBadge: "PACK SUEÑO FAMILIAR",
          subtitle: "Bruma de lavanda · triple descanso",
          price: 2290.00,
          originalPrice: 4200.00,
          popular: false,
          tag: "MEJOR VALOR",
          bottleCount: 3
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
      comment: "¡Excelente servicio! Pedí el tratamiento de 2 frascos de 15 Day Cleanse por la tarde y al día siguiente en la mañana me llegó a mi casa. Pagué en efectivo al repartidor. 100% recomendado.",
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
