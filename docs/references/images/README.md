# 📸 Imágenes de Referencia - Sinclair Spectrum ZX 128K +2A

## 🎯 Propósito

Estas imágenes sirven como referencia visual para mantener la fidelidad al diseño original del Sinclair Spectrum ZX 128K +2A durante el desarrollo de la web personal.

## 📁 Imágenes Disponibles

### **spectrum-boot-menu.png**
- **Descripción**: Menú principal de boot del Spectrum
- **Uso**: Referencia para el diseño del menú principal
- **Elementos clave**: 
  - Layout de la caja del menú
  - Barra de colores en el header
  - Tipografía y espaciado
  - Colores exactos del Spectrum

### **spectrum-loading1.png**
- **Descripción**: Pantalla de carga (diseño 1)
- **Uso**: Referencia para la animación de carga
- **Elementos clave**:
  - Patrón de carga visual
  - Texto de estado
  - Animación de progreso

### **spectrum-loading2.png**
- **Descripción**: Pantalla de carga (diseño 2)
- **Uso**: Referencia alternativa para la animación de carga
- **Elementos clave**:
  - Diferente patrón de carga
  - Variación en el diseño
  - Elementos visuales alternativos

### **spectrum-selected-option.png**
- **Descripción**: Pantalla de confirmación de opción seleccionada
- **Uso**: Referencia para el estado de selección
- **Elementos clave**:
  - Feedback visual de selección
  - Transición de estado
  - Confirmación de acción

## 🎨 Análisis Visual

### **Colores Identificados**
- **Fondo principal**: Gris claro (#c0c0c0)
- **Caja del menú**: Blanco con borde negro
- **Texto normal**: Blanco sobre negro
- **Texto seleccionado**: Cyan sobre negro
- **Barra de colores**: Rojo, Amarillo, Verde, Cyan, Azul, Magenta, Negro

### **Tipografía**
- **Estilo**: Monospace pixelado
- **Tamaño**: 8x8 píxeles por carácter
- **Espaciado**: 1 píxel entre caracteres
- **Renderizado**: Pixelado para autenticidad

### **Layout**
- **Posición**: Centrado en pantalla
- **Proporciones**: 4:3 (original)
- **Responsive**: Adaptable a diferentes pantallas

## 🔧 Uso en Desarrollo

### **Componentes Astro**
```astro
---
// En SpectrumMenu.astro
const referenceImage = '/docs/references/images/spectrum-boot-menu.png';
---
```

### **CSS Referencias**
```css
/* Basado en spectrum-boot-menu.png */
.spectrum-menu {
  background: #c0c0c0;
  border: 2px solid #000;
  /* ... más estilos basados en la imagen */
}
```

### **Testing de Fidelidad**
- Comparar visualmente con las imágenes de referencia
- Verificar colores exactos
- Validar proporciones y espaciado
- Confirmar tipografía pixelada

## 📝 Notas de Implementación

- **Fidelidad**: Mantener exactitud visual con las referencias
- **Adaptación**: Adaptar a diferentes tamaños de pantalla
- **Accesibilidad**: Asegurar contraste y legibilidad
- **Performance**: Optimizar imágenes para web

## 🔗 Referencias Relacionadas

- [Especificaciones técnicas](../specs/spectrum-specs.md)
- [Sonidos del Spectrum](../sounds/spectrum-sounds.md)
- [Documentación del proyecto](../../../project-spec.md)
