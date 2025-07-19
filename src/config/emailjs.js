// Configuración de EmailJS
// Obtén estas credenciales desde https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_cwyygwv', // Actualizar con el nuevo Service ID si cambias
  TEMPLATE_ID: 'template_2fl0qrq', // Reemplazar con tu Template ID
  USER_ID: 'q-11Z0-MV2oFkqoB9', // Reemplazar con tu User ID
};

// Template de ejemplo para EmailJS:
/*
Template HTML para EmailJS:

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
*/ 