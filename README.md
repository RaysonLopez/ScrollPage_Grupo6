# Peugeot Scroll Review - HTML con Bootstrap 5

Una página web moderna y responsiva de reseñas de vehículos Peugeot, construida con HTML5, Bootstrap 5, CSS personalizado y JavaScript interactivo.

## 📋 Características

✨ **Diseño Moderno**
- Interfaz limpia y profesional
- Colores corporativos de Peugeot (azul y amarillo)
- Gradientes y animaciones suaves
- Completamente responsivo (Mobile-first)

🎯 **Secciones Principales**

1. **Hero Section**
   - Banner impactante con animaciones
   - Llamada a la acción clara
   - Navegación suave

2. **Reseñas (Scroll Review)**
   - Tarjetas de reseñas horizontales desplazables
   - Sistema de calificaciones con estrellas
   - Fotos de perfil de clientes
   - Información del modelo de vehículo
   - Animaciones al pasar el mouse

3. **Galería de Vehículos**
   - Grid responsivo de imágenes
   - Efecto zoom y overlay al pasar el mouse
   - Información del modelo superpuesta
   - Nombres de modelos: 208, 308, 2008, 3008, 508, 5008

4. **Testimonios**
   - Tarjetas con citas destacadas
   - Información del cliente
   - Profesión/ocupación
   - Animaciones de elevación

5. **Contacto**
   - Información de contacto (dirección, teléfono, email)
   - Formulario de contacto validado
   - Enlaces a redes sociales
   - Formulario con validación

6. **Barra de Navegación**
   - Sticky navbar
   - Enlaces suavizados
   - Responsive hamburger menu
   - Efectos visuales al hover

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Semántica y estructura
- **Bootstrap 5.3.0**: Framework CSS responsivo
- **CSS Personalizado**: Estilos únicos y animaciones
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **Font Awesome 6.4.0**: Iconografía

## 📁 Estructura de Archivos

```
├── index.html       # Archivo principal HTML
├── styles.css       # Estilos CSS personalizados
├── script.js        # Funcionalidades JavaScript
└── README.md        # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Directa (Sin instalación)
1. Descarga los tres archivos (index.html, styles.css, script.js)
2. Asegúrate de que estén en la misma carpeta
3. Abre `index.html` en tu navegador favorito

### Opción 2: Con servidor local (Recomendado)

**Usando Python 3:**
```bash
python -m http.server 8000
```

**Usando Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Usando Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 📱 Responsividad

La página está optimizada para:
- 📱 Móviles (320px y superiores)
- 📱 Tablets (768px y superiores)
- 🖥️ Pantallas de escritorio (1024px y superiores)

## ✨ Características Interactivas

### JavaScript Funcionalidades

1. **Scroll to Top Button**
   - Botón flotante que aparece al desplazarse
   - Vuelve al inicio suavemente

2. **Reveal on Scroll**
   - Elementos se revelan al pasar por viewport
   - Animaciones smooth

3. **Validación de Formulario**
   - Validación de campos
   - Validación de email
   - Mensajes de confirmación

4. **Navegación Suave**
   - Links internos con scroll smooth
   - Navbar activa según la sección

5. **Lazy Loading de Imágenes**
   - Carga optimizada de imágenes
   - Mejor rendimiento

6. **Keyboard Navigation**
   - Navegación con teclas de flecha
   - Accesibilidad mejorada

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul Oscuro | #001a4d | Fondos principales |
| Amarillo | #ffc107 | Acentos y botones |
| Naranja | #ff9800 | Efectos hover |
| Gris Oscuro | #2d2d2d | Navbars |
| Blanco | #ffffff | Texto principal |

## 📊 Modelos Peugeot Incluidos

- **208**: Urbano deportivo
- **308**: Compacto moderno
- **2008**: Crossover urbano
- **3008**: SUV Compacto
- **5008**: SUV 7 plazas
- **508**: Berlina de lujo

## 🔧 Personalización

### Cambiar Colores
Edita `styles.css` y busca los valores hex:
- Azul principal: `#001a4d`
- Amarillo: `#ffc107`
- Naranja: `#ff9800`

### Agregar Reseñas
En `index.html`, duplica una tarjeta `.review-card` y modifica:
- Nombre del cliente
- Modelo de vehículo
- Calificación (estrellas)
- Texto de reseña
- Fecha

### Cambiar Imágenes
Reemplaza las URLs de `https://via.placeholder.com/` con tus propias imágenes.

## 📖 Animaciones CSS

- `fadeInDown`: Animación de entrada desde arriba
- `fadeInUp`: Animación de entrada desde abajo
- `slideInUp`: Deslizamiento hacia arriba
- `wave`: Onda infinita en el hero
- `scale`: Zoom en hover

## 🌐 Compatibilidad del Navegador

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## ♿ Accesibilidad

- Semántica HTML5 apropiada
- Suficiente contraste de colores
- Navegación por teclado
- ARIA labels en botones
- Texto descriptivo en imágenes

## ⚡ Optimización de Rendimiento

- CSS minificable
- JavaScript débounced para scroll
- Lazy loading de imágenes
- Uso de CSS Grid y Flexbox
- CDN para librerías externas

## 📝 Secciones de Código

### Header/Navbar
- Logo Peugeot
- Menú de navegación
- Enlaces suavizados

### Reviews Scroll Horizontal
- Desplazamiento horizontal
- Tarjetas individuales
- Sistema de estrellas

### Galería
- Grid responsivo
- Efectos hover
- Overlay de información

### Testimonios
- Grid de 3-6 columnas
- Citas destacadas
- Información del cliente

### Contacto
- Información de empresa
- Formulario validado
- Enlaces sociales

## 🐛 Troubleshooting

### Las imágenes no cargan
- Comprueba tu conexión a internet
- Las imágenes placeholder requieren internet

### El formulario no valida
- Asegúrate de que JavaScript está habilitado
- Comprueba la consola del navegador (F12)

### El scroll no funciona en mobile
- Esto es normal en algunos navegadores
- Usa la navegación del navbar en su lugar

## 📞 Soporte

Para problemas o sugerencias, consulta la documentación de:
- [Bootstrap 5 Docs](https://getbootstrap.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licencia

Este proyecto está disponible para uso personal y educativo.

## 🎓 Propósitos Educativos

Este proyecto es ideal para aprender:
- HTML5 semántico
- Bootstrap 5
- CSS avanzado (Grid, Flexbox, animaciones)
- JavaScript vanilla
- Diseño responsivo
- UX/UI moderno

---

**Creado para demostración de habilidades en desarrollo web frontend**

¡Disfruta construyendo con esta página base! 🚀
