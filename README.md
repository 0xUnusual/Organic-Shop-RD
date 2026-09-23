# 🌿 Organic Shop RD

> **Sitio Web de Comercio Electrónico con Pago Contra Entrega (Paga en Casa) para República Dominicana 🇩🇴 y Cierre de Ventas Automatizado vía WhatsApp.**

Diseñado y optimizado para tráfico directo de redes sociales (**Instagram, TikTok, Facebook Ads**), combinando una estética botánica premium con un embudo de conversión de alta velocidad.

---

## 🚀 Características Principales

- **📦 Modelo Pago Contra Entrega (Cash On Delivery)**:
  - Permite a los clientes de República Dominicana pedir productos en 30 segundos sin necesidad de tarjetas ni transferencias bancarias.
  - El cliente solo paga en efectivo al recibir el paquete en su casa u oficina.

- **🛍️ Catálogo Multi-Producto Dinámico**:
  - Preparado para gestionar múltiples productos orgánicos con paquetes/packs de ahorro por cantidad (1 frasco, 2 frascos con descuento, ofertas familiares).
  - Botón de llamado a la acción directo en cada producto: *"ORDENAR Y PAGAR EN CASA"*, que carga automáticamente la orden en el checkout.

- **📋 Formulario de Checkout Interactivo (Fiel a la Referencia)**:
  - **Tabla de Resumen en Tiempo Real**: Subtotal, Descuentos calculados, Envío gratis y Total en pesos dominicanos (`RD$`).
  - **Campos con Iconos**: Nombre, Apellido, Celular con WhatsApp, Dirección y Referencia.
  - **Desplegable Inteligente Dominicano**: Incluye las 31 provincias oficiales de RD + Distrito Nacional, con carga dinámica y automática de sus municipios correspondientes para reducir errores de entrega.
  - **Order Bump / Venta Adicional**: Casilla interactiva destacada con borde verde punteado (*🔥 Agrega Bálsamo Labial Reparador por solo RD$ 295.00*). Al marcarla o desmarcarla, recalcula inmediatamente el total tanto en el resumen como en el botón verde.

- **📲 Automatización con WhatsApp Business**:
  - Al presionar el botón verde `CLICK AQUÍ Y PAGAS AL RECIBIR`, valida los campos obligatorios, genera un número de orden único (`#ORD-XXXX`) y redirige automáticamente a WhatsApp (`+1 849-472-0790`) con un mensaje estructurado que contiene todos los detalles listos para confirmación de entrega.

- **📱 Diseño Mobile-First & Ultra Rápido**:
  - Construido con HTML5, CSS3 y JavaScript moderno nativo (Vanilla), sin dependencias pesadas, garantizando una carga casi instantánea en smartphones.

---

## 📁 Estructura del Proyecto

```text
Organic-Shop-RD/
├── index.html              # Estructura principal, secciones de hero, catálogo y modal de checkout
├── README.md               # Documentación general del proyecto
├── css/
│   ├── style.css           # Estilos base, diseño responsivo, estética orgánica y tipografía
│   └── checkout.css        # Estilos específicos del formulario contra entrega (diseño de referencia)
├── js/
│   ├── config.js           # Configuración central (teléfono WhatsApp RD, catálogo de productos y precios)
│   ├── rd-locations.js     # Base de datos oficial de Provincias y Municipios de República Dominicana
│   └── app.js              # Lógica de cálculo interactivo, validaciones y envío a WhatsApp
└── assets/
    └── images/             # Fotografías de productos generadas en alta resolución
        ├── serum_organico.jpg
        ├── crema_botanica.jpg
        ├── aceite_romero.jpg
        └── balsamo_labial.jpg
```

---

## ⚙️ Cómo Personalizar la Tienda

Toda la configuración principal se encuentra centralizada en [`js/config.js`](js/config.js), lo que te permite cambiar datos sin tocar código complejo:

### 1. Cambiar el Número de WhatsApp
Edita las siguientes líneas en [`js/config.js`](js/config.js):
```javascript
whatsappNumber: "18494720790", // Código internacional + número (ejemplo: 1 + 809/829/849...)
whatsappDisplay: "(849) 472-0790",
```

### 2. Modificar o Agregar Productos
Dentro del arreglo `products: [...]` en [`js/config.js`](js/config.js) puedes modificar nombres, descripciones, fotos y precios:
```javascript
{
  id: "prod-tu-producto",
  name: "Nombre de tu Producto",
  category: "Cuidado Facial",
  badge: "MÁS VENDIDO 🌟",
  image: "assets/images/tu_imagen.jpg",
  originalPrice: 2500.00,
  price: 1850.00,
  discount: 650.00,
  ...
}
```

### 3. Personalizar la Oferta Adicional (Order Bump)
Puedes modificar el producto o precio de la oferta especial que aparece en el checkout:
```javascript
orderBump: {
  enabled: true,
  title: "Agrega Bálsamo Labial Reparador 100% Orgánico (Cera & Miel)",
  price: 295.00,
  originalPrice: 590.00,
  image: "assets/images/balsamo_labial.jpg",
  emoji: "🔥"
}
```

---

## 🌐 Cómo Ejecutar y Probar Localmente

### Opción 1: Abrir directamente
Haz doble clic sobre el archivo [`index.html`](index.html) para abrirlo en cualquier navegador web moderno (Google Chrome, Safari, Edge, Firefox).

### Opción 2: Con un Servidor Local
Si deseas probarlo simulando un servidor de producción:
```bash
# Con Python
python -m http.server 3000

# O con Node.js / npx
npx serve .
```
Luego abre tu navegador en `http://localhost:3000`.

---

## 🇩🇴 Provincias y Municipios Soportados

El archivo [`js/rd-locations.js`](js/rd-locations.js) incluye todas las provincias de República Dominicana:
- Distrito Nacional
- Santo Domingo (Este, Oeste, Norte, Boca Chica, Los Alcarrizos, etc.)
- Santiago de los Caballeros
- La Altagracia (Higüey, Bávaro, Punta Cana)
- San Cristóbal, La Vega, Puerto Plata, San Pedro de Macorís, Duarte, etc.

---

## 📄 Licencia

Este proyecto está disponible para uso comercial de **Organic Shop RD**.
Diseñado para la venta de productos en redes sociales con entrega a domicilio en República Dominicana.

---

## 👨‍💻 Autor

Creado por [Junior Montero](https://github.com/0xUnusual) (GitHub: [@0xUnusual](https://github.com/0xUnusual)).
