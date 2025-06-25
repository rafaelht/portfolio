# Portfolio Personal - Rafael Hilario

Un portfolio moderno y responsivo creado con HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos de entrada y hover para mejorar la experiencia del usuario
- **Formulario de Contacto**: Formulario funcional con validación
- **Secciones Completas**: Inicio, Sobre mí, Experiencia, Proyectos, Habilidades y Contacto

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
└── rafael_hilario_resume-spanish_CV.pdf  # Tu CV
```

## 🎨 Personalización

### 1. Información Personal
Edita el archivo `index.html` para actualizar:

- **Nombre y título**: Cambia "Rafael Hilario" por tu nombre
- **Descripción**: Modifica la descripción en la sección hero
- **Información de contacto**: Actualiza email, teléfono y ubicación
- **Enlaces sociales**: Agrega tus perfiles de LinkedIn, GitHub, etc.

### 2. Experiencia Laboral
En la sección de experiencia, actualiza:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Tu Cargo</h3>
        <h4>Nombre de la Empresa</h4>
        <p class="timeline-date">Fecha - Fecha</p>
        <ul>
            <li>Descripción de responsabilidades</li>
            <li>Logros importantes</li>
        </ul>
    </div>
</div>
```

### 3. Proyectos
Reemplaza los proyectos de ejemplo con los tuyos:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto</p>
        <div class="project-tech">
            <span>Tecnología 1</span>
            <span>Tecnología 2</span>
        </div>
        <div class="project-links">
            <a href="URL_DEL_DEMO" class="btn btn-small">Ver Demo</a>
            <a href="URL_DEL_CODIGO" class="btn btn-small btn-outline">Código</a>
        </div>
    </div>
</div>
```

### 4. Habilidades
Actualiza las habilidades técnicas en las tres categorías:

- **Frontend**: HTML, CSS, JavaScript, frameworks
- **Backend**: Lenguajes de programación, bases de datos
- **Herramientas**: Git, Docker, servicios en la nube, etc.

### 5. Colores y Estilo
Modifica los colores principales en `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Azul principal */
    --secondary-color: #fbbf24;  /* Amarillo/dorado */
    --accent-color: #667eea;     /* Gradiente azul */
    --text-color: #1f2937;       /* Texto principal */
    --text-light: #6b7280;       /* Texto secundario */
}
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía Inter

## 📱 Responsive Design

El portfolio está optimizado para:

- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Cómo Usar

1. **Descarga o clona** el proyecto
2. **Personaliza** la información según tus datos
3. **Abre** `index.html` en tu navegador
4. **Sube** a un servidor web para hacerlo público

### Opciones de Hosting Gratuito:

- **GitHub Pages**: Conecta tu repositorio
- **Netlify**: Drag & drop del proyecto
- **Vercel**: Deploy automático desde GitHub
- **Firebase Hosting**: Hosting de Google

## 📧 Formulario de Contacto

El formulario incluye validación básica. Para hacerlo funcional:

1. **Backend propio**: Implementa un servidor para procesar el formulario
2. **Servicios externos**: Usa Formspree, Netlify Forms, o EmailJS
3. **Integración con email**: Conecta con servicios como SendGrid

### Ejemplo con EmailJS:

```javascript
// Agregar en script.js
emailjs.init("TU_USER_ID");

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.send("service_id", "template_id", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    }).then(
        function(response) {
            alert("Mensaje enviado exitosamente!");
        },
        function(error) {
            alert("Error al enviar el mensaje.");
        }
    );
});
```

## 🎯 SEO y Optimización

Para mejorar el SEO:

1. **Meta tags**: Agrega descripción y keywords
2. **Open Graph**: Para compartir en redes sociales
3. **Sitemap**: Genera un sitemap.xml
4. **Analytics**: Integra Google Analytics

## 🔧 Mantenimiento

- Actualiza regularmente la información de proyectos
- Mantén las habilidades técnicas al día
- Revisa y actualiza los enlaces de contacto
- Optimiza imágenes para mejor rendimiento

## 📄 Licencia

Este proyecto es de uso libre. Puedes modificarlo y usarlo para tu portfolio personal.

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora, no dudes en contribuir al proyecto.

---

**¡Disfruta creando tu portfolio profesional!** 🎉 