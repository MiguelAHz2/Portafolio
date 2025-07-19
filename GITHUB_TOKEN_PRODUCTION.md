# 🔑 Configuración de GitHub Token para Producción

## 📋 **Problema: Token no funciona en Vercel**

Los tokens de GitHub pueden tener restricciones que impiden su uso en producción.

## 🔧 **Solución Paso a Paso**

### **1. Generar Nuevo Token para Producción**

1. **Ve a GitHub Settings:**
   - https://github.com/settings/tokens

2. **Genera un nuevo token:**
   - Haz clic en **"Generate new token (classic)"**
   - **Nombre:** `Portafolio-Produccion`
   - **Expiración:** `No expiration` (o 90 días)

3. **Permisos necesarios:**
   - ✅ **repo** - Acceso completo a repositorios
   - ✅ **read:user** - Leer información del usuario
   - ✅ **read:email** - Leer email del usuario
   - ✅ **public_repo** - Acceso a repositorios públicos

### **2. Configurar en Vercel**

1. **Ve a tu proyecto en Vercel:**
   - https://vercel.com/dashboard
   - Selecciona tu proyecto

2. **Ve a Settings > Environment Variables**

3. **Agrega estas variables:**
   ```
   VITE_GITHUB_USERNAME=MiguelAHz2
   VITE_GITHUB_TOKEN=ghp_tu_nuevo_token_aqui
   ```

4. **Haz clic en "Save"**

### **3. Redeploy**

1. **Ve a Deployments**
2. **Haz clic en "Redeploy"** en el último deployment
3. **O haz un nuevo commit** para trigger automático

### **4. Verificar**

1. **Ve a tu sitio en Vercel**
2. **Abre la consola del navegador** (F12)
3. **Verifica que no hay errores** de GitHub API

## ⚠️ **Importante:**

- **Los tokens de GitHub son sensibles**
- **No los compartas públicamente**
- **Revisa los permisos** del token
- **Usa tokens específicos** para producción

## 🔍 **Debugging:**

Si sigue sin funcionar:

1. **Verifica el token** en GitHub
2. **Revisa los permisos** del token
3. **Prueba el token** localmente
4. **Revisa los logs** de Vercel

---

## 🎯 **Próximos Pasos:**

1. **Genera el nuevo token**
2. **Configúralo en Vercel**
3. **Haz redeploy**
4. **Verifica que funcione**

¡El token de producción debería resolver el problema! 🚀 