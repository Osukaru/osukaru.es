# 🔧 Especificaciones Técnicas - Sinclair Spectrum ZX 128K +2A

## 📊 Características Técnicas

### **Hardware Original**
- **CPU**: Z80A a 3.5MHz
- **RAM**: 128KB
- **ROM**: 32KB
- **Resolución**: 256x192 píxeles
- **Colores**: 15 colores (8 colores + 8 colores brillantes + negro)

### **Display**
- **Modo de texto**: 32x24 caracteres
- **Fuente**: 8x8 píxeles
- **Colores de texto**: Blanco sobre negro por defecto
- **Selección**: Cyan sobre negro

### **Paleta de Colores**
```
Color      RGB        Hex
Negro      #000000    #000000
Azul       #0000CD    #0000CD
Rojo       #CD0000    #CD0000
Magenta    #CD00CD    #CD00CD
Verde      #00CD00    #00CD00
Cyan       #00CDCD    #00CDCD
Amarillo   #CDCD00    #CDCD00
Blanco     #CDCDCD    #CDCDCD

Brillantes (misma base + brillo)
Azul B     #0000FF    #0000FF
Rojo B     #FF0000    #FF0000
Magenta B  #FF00FF    #FF00FF
Verde B    #00FF00    #00FF00
Cyan B     #00FFFF    #00FFFF
Amarillo B #FFFF00    #FFFF00
Blanco B   #FFFFFF    #FFFFFF
```

## 🎮 Interfaz de Usuario

### **Menú de Boot**
- **Layout**: Caja centrada con borde negro
- **Header**: "128 +2A" + barra de colores
- **Opciones**: Lista vertical con selección
- **Footer**: Copyright y información del sistema

### **Navegación**
- **Teclas**: Flechas ↑↓ para navegar
- **Selección**: Enter para confirmar
- **Escape**: Volver al menú principal

### **Estados Visuales**
- **Normal**: Texto blanco sobre fondo negro
- **Seleccionado**: Texto cyan sobre fondo negro
- **Carga**: Animación de carga con sonido

## 🔊 Audio

### **Características**
- **Canal**: Mono
- **Frecuencia**: 3.5MHz / 16 = ~218.75kHz
- **Sonidos**: Generados por software

### **Tipos de Sonido**
- **Beep**: Tono puro de frecuencia variable
- **Carga**: Tono variable con modulación
- **Error**: Tono más largo y grave

## 📐 Dimensiones y Layout

### **Pantalla**
- **Aspecto**: 4:3
- **Resolución**: 256x192
- **Píxeles**: Cuadrados perfectos

### **Menú**
- **Ancho**: ~80% del ancho de pantalla
- **Alto**: ~60% del alto de pantalla
- **Posición**: Centrado vertical y horizontalmente

### **Tipografía**
- **Fuente**: Monospace
- **Tamaño**: 8x8 píxeles por carácter
- **Espaciado**: 1 píxel entre caracteres

## 🎨 Consideraciones de Diseño

### **Fidelidad**
- Mantener proporciones originales
- Usar colores exactos del Spectrum
- Preservar tipografía pixelada
- Recrear sonidos característicos

### **Adaptaciones Modernas**
- Responsive design para diferentes pantallas
- Accesibilidad para usuarios con discapacidades
- Optimización para navegadores modernos
- Fallbacks para funcionalidades no soportadas
