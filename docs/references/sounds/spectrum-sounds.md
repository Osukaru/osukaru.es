# 🔊 Sonidos del Sinclair Spectrum ZX 128K +2A

## 🎵 Sonidos Característicos

### **Sonido de Navegación**
- **Descripción**: Beep corto y agudo al cambiar selección
- **Frecuencia**: ~1000Hz
- **Duración**: 50-100ms
- **Uso**: Al navegar entre opciones del menú

### **Sonido de Carga**
- **Descripción**: Zumbido característico de carga de cinta
- **Frecuencia**: Variable entre 400-800Hz
- **Duración**: Variable (depende del tiempo de carga)
- **Uso**: Durante la simulación de carga de página

### **Sonido de Error**
- **Descripción**: Beep de error más largo
- **Frecuencia**: ~800Hz
- **Duración**: 200-300ms
- **Uso**: Cuando hay un error o acción no válida

### **Sonido de Confirmación**
- **Descripción**: Beep de confirmación
- **Frecuencia**: ~1200Hz
- **Duración**: 100-150ms
- **Uso**: Al seleccionar una opción válida

## 🎛️ Implementación

### **Web Audio API**
```javascript
// Ejemplo de implementación
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSpectrumSound(frequency = 1000, duration = 100) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);
}
```

### **Frecuencias Recomendadas**
- **Navegación**: 1000Hz
- **Carga**: 400-800Hz (variable)
- **Error**: 800Hz
- **Confirmación**: 1200Hz

## 📝 Notas

- Los sonidos deben ser opcionales (muted por defecto en mobile)
- Considerar accesibilidad para usuarios con problemas auditivos
- Mantener volumen bajo para no ser intrusivo
- Proporcionar opción de desactivar sonidos
