# 🎮 Web Personal - Sinclair Spectrum ZX 128K +2A

## 📋 **Descripción del Proyecto**

Recreación de una web personal con el diseño y experiencia de usuario del Sinclair Spectrum ZX 128K +2A, el primer ordenador del usuario. La web simulará exactamente la interfaz de boot del Spectrum con navegación por teclado y sonidos característicos.

## 🎯 **Objetivos**

- ✅ Recrear fielmente la interfaz del Spectrum ZX 128K +2A
- ✅ Implementar navegación por teclado (flechas + Enter)
- ✅ Simular el proceso de carga con sonidos característicos
- ✅ Mantener el dominio personalizado `osukaru.es`
- ✅ Despliegue automático en GitHub Pages
- ✅ Diseño responsive y accesible

## 🎨 **Diseño y UX**

### **Pantalla Principal (Home)**
```
┌─────────────────────────────────────┐
│ Osukaru    [█][█][█][█][█][█][█]  │
├─────────────────────────────────────┤
│ Experiencia                        │
│ Conocimientos                      │
│ Mis proyectos                      │
│ Contacto                           │
└─────────────────────────────────────┘

©1980. Óscar López Carazo
↑↓ para desplazar y ENTER para seleccionar
```

### **Colores del Spectrum**
- **Fondo principal**: `#c0c0c0` (Gris claro)
- **Caja del menú**: Blanco con borde negro
- **Texto normal**: Blanco sobre negro
- **Texto seleccionado**: Cyan sobre negro
- **Barra de colores**: Rojo, Amarillo, Verde, Cyan, Azul, Magenta, Negro

> 📸 **Referencias visuales**: Ver imágenes en `docs/references/images/` para mantener fidelidad al diseño original.

### **Tipografía**
- **Fuente**: Monospace pixelada (Spectrum-like)
- **Tamaño**: 16px base
- **Renderizado**: Pixelado para autenticidad

## ⌨️ **Interactividad**

### **Navegación por Teclado**
- **↑/↓**: Navegar entre opciones
- **Enter**: Seleccionar opción
- **Escape**: Volver al menú principal
- **Flechas laterales**: Navegación secundaria (si aplica)

### **Estados de Interfaz**
1. **Menú Principal**: Lista de opciones con selección
2. **Pantalla de Carga**: Simulación de carga de cinta (2 diseños alternativos)
3. **Opción Seleccionada**: Pantalla de confirmación de selección
4. **Contenido**: Página específica con navegación

> 📸 **Referencias visuales**: 
> - Menú principal: `docs/references/images/spectrum-boot-menu.png`
> - Pantallas de carga: `docs/references/images/spectrum-loading1.png` y `spectrum-loading2.png`
> - Opción seleccionada: `docs/references/images/spectrum-selected-option.png`

### **Sonidos del Spectrum**
- **Sonido de navegación**: Beep corto al cambiar selección
- **Sonido de carga**: Zumbido característico de carga de cinta
- **Sonido de error**: Beep de error (si aplica)
- **Sonido de confirmación**: Beep de confirmación

> 🔊 **Referencias de audio**: Ver `docs/references/sounds/spectrum-sounds.md` para detalles técnicos de implementación.

## 📁 **Estructura del Proyecto**

```
osukaru.es/
├── src/
│   ├── components/
│   │   ├── SpectrumMenu.astro      # Menú principal
│   │   ├── LoadingScreen.astro     # Pantalla de carga
│   │   ├── RetroDisplay.astro      # Contenedor retro
│   │   └── SpectrumAudio.astro     # Gestión de audio
│   ├── pages/
│   │   ├── index.astro             # Home con menú
│   │   ├── experiencia.astro       # Página de experiencia
│   │   ├── conocimientos.astro     # Página de conocimientos
│   │   ├── proyectos.astro         # Página de proyectos
│   │   └── contacto.astro          # Página de contacto
│   ├── styles/
│   │   ├── spectrum.css            # Estilos del Spectrum
│   │   ├── loading.css             # Animaciones de carga
│   │   └── global.css              # Estilos globales
│   └── scripts/
│       ├── spectrum.js             # Lógica del Spectrum
│       ├── audio.js                # Gestión de sonidos
│       └── navigation.js           # Navegación por teclado
├── public/
│   ├── fonts/
│   │   └── spectrum.woff2         # Fuente pixelada
│   ├── sounds/
│   │   ├── navigation.wav         # Sonido de navegación
│   │   ├── loading.wav            # Sonido de carga
│   │   └── error.wav              # Sonido de error
│   └── images/
│       └── spectrum-bg.png        # Fondo opcional
├── docs/
│   └── references/                # Referencias del proyecto
│       ├── images/                # Imágenes de referencia del Spectrum
│       ├── sounds/                # Documentación de sonidos
│       └── specs/                 # Especificaciones técnicas
├── astro.config.mjs
├── package.json
└── README.md
```

## 🛠️ **Stack Tecnológico**

### **Core**
- **Astro**: Framework SSG
- **Vanilla JavaScript**: Interactividad
- **CSS**: Estilos retro
- **Web Audio API**: Sonidos del Spectrum

### **Dependencias**
```json
{
  "dependencies": {
    "astro": "^4.0.0"
  },
  "devDependencies": {
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

## 📱 **Responsive Design**

### **Breakpoints**
- **Desktop**: 1024px+ (Experiencia completa)
- **Tablet**: 768px-1023px (Adaptado)
- **Mobile**: <768px (Simplificado)

### **Adaptaciones Mobile**
- Navegación táctil como alternativa
- Menú hamburguesa retro
- Sonidos opcionales (muted por defecto)

## 🚀 **Despliegue**

### **GitHub Pages**
- **Rama**: `gh-pages` o `main`
- **Build**: SSG estático
- **Dominio**: `osukaru.es` (CNAME existente)
- **CI/CD**: GitHub Actions

### **Configuración de Build**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

## 📊 **Métricas y SEO**

### **SEO**
- Meta tags optimizados
- Sitemap automático
- Open Graph tags
- Schema.org markup

### **Performance**
- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🧪 **Testing**

### **Funcionalidades a Testear**
- ✅ Navegación por teclado
- ✅ Reproducción de sonidos
- ✅ Responsive design
- ✅ Accesibilidad (WCAG 2.1)
- ✅ SEO y meta tags
- ✅ Build y despliegue

### **Herramientas de Testing**
- **Lighthouse**: Performance y SEO
- **axe-core**: Accesibilidad
- **Jest**: Unit testing (si necesario)

## 📝 **Contenido**

### **Páginas Planificadas**
1. **Experiencia**: Timeline profesional y personal
2. **Conocimientos**: Skills técnicas y soft skills
3. **Mis proyectos**: Portfolio de proyectos
4. **Contacto**: Formulario y redes sociales

### **Estructura de Contenido**
- **Formato**: Markdown + Astro components
- **CMS**: Headless (opcional)
- **Imágenes**: Optimizadas y lazy loading
- **Videos**: Embebidos (si aplica)

## 🔧 **Configuración de Desarrollo**

### **Scripts**
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### **Variables de Entorno**
```env
# .env
PUBLIC_SITE_URL=https://osukaru.es
PUBLIC_AUDIO_ENABLED=true
```

## 🎯 **Fases de Desarrollo**

### **Fase 1: Setup y Diseño Base**
- [x] Instalar Astro
- [x] Crear estructura de carpetas
- [x] Implementar diseño del menú principal
- [x] Configurar navegación por teclado

### **Fase 2: Interactividad y Estados**
- [x] Implementar Web Audio API
- [x] Crear sonidos del Spectrum
- [x] Añadir pantalla de carga (2 diseños alternativos)
- [ ] Implementar pantalla de opción seleccionada
- [x] Optimizar navegación

### **Fase 3: Contenido y Páginas**
- [ ] Crear páginas de contenido
- [ ] Implementar responsive design
- [ ] Optimizar SEO
- [ ] Testing completo

### **Fase 4: Despliegue y Optimización**
- [ ] Configurar GitHub Actions
- [ ] Optimizar performance
- [ ] Testing de accesibilidad
- [ ] Lanzamiento

## 📋 **Checklist de Completado**

### **Funcionalidades Core**
- [x] Menú principal del Spectrum
- [x] Navegación por teclado
- [x] Sonidos característicos
- [x] Pantalla de carga (2 diseños alternativos)
- [ ] Pantalla de opción seleccionada
- [ ] Páginas de contenido
- [x] Responsive design
- [ ] Despliegue automático

### **Optimizaciones**
- [ ] Performance optimizado
- [ ] SEO implementado
- [ ] Accesibilidad WCAG 2.1
- [ ] Testing completo
- [ ] Documentación

---

**Última actualización**: [Fecha]
**Versión**: 1.0.0
**Autor**: Osukaru
