# Configuración del Formulario de Contacto

## 📧 Configuración de EmailJS

El formulario de contacto utiliza **EmailJS** para enviar emails directamente desde el frontend sin necesidad de backend.

### 🔧 Pasos para configurar:

#### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- Verifica tu email

#### 2. Configurar Email Service
1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. **Guarda el Service ID** (ej: `service_abc123`)

#### 3. Crear Email Template
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuevo mensaje de contacto</title>
</head>
<body>
    <h2>Nuevo mensaje de contacto desde tu portafolio</h2>
    
    <h3>Información del remitente:</h3>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    
    <h3>Mensaje:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>Este mensaje fue enviado desde tu portafolio web.</em></p>
</body>
</html>
```

4. **Guarda el Template ID** (ej: `template_xyz789`)

#### 4. Obtener User ID
1. Ve a **Account** → **API Keys**
2. **Copia tu Public Key** (ej: `user_def456`)

#### 5. Configurar en el proyecto
1. Abre el archivo `src/config/emailjs.js`
2. Reemplaza los valores con tus credenciales:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Tu Service ID
  TEMPLATE_ID: 'template_xyz789', // Tu Template ID
  USER_ID: 'user_def456', // Tu User ID
};
```

### ✅ Funcionalidades implementadas:

- ✅ **Validación de formulario** (campos requeridos)
- ✅ **Estado de carga** durante el envío
- ✅ **Mensajes de éxito/error** con animaciones
- ✅ **Deshabilitación de campos** durante envío
- ✅ **Limpieza automática** del formulario tras envío exitoso
- ✅ **Diseño responsive** y accesible
- ✅ **Integración con componentes UI** modernos

### 🎨 Características del formulario:

- **Glassmorphism design** con efectos de blur
- **Animaciones suaves** con Framer Motion
- **Iconos informativos** para estados de éxito/error
- **Botón con estado de carga** y spinner
- **Validación visual** de campos
- **Compatibilidad con modo oscuro**

### 🔒 Seguridad:

- EmailJS maneja la seguridad del envío
- No se almacenan datos sensibles en el frontend
- Validación tanto en cliente como servidor
- Rate limiting incluido en el plan gratuito

### 📱 Responsive:

- Formulario adaptativo para móviles
- Campos apilados en pantallas pequeñas
- Botón de ancho completo en móvil
- Espaciado optimizado para touch

### 🚀 Uso:

Una vez configurado, los usuarios podrán:
1. Llenar el formulario con su información
2. Escribir su mensaje
3. Enviar el formulario con un clic
4. Recibir confirmación visual del envío
5. Recibirás el email en tu bandeja de entrada

¡El formulario está listo para recibir mensajes de tus visitantes! 🎉 