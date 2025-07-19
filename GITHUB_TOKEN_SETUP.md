# 🔧 Configuración del Token de GitHub

## 📋 Pasos para configurar el token en Vercel:

### 1. **Generar Token de GitHub**
1. Ve a [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Haz clic en "Generate new token (classic)"
3. Dale un nombre descriptivo: `Portfolio API Token`
4. **Selecciona estos scopes:**
   - ✅ `public_repo` (para acceder a repositorios públicos)
   - ✅ `read:user` (para leer información del usuario)
5. Haz clic en "Generate token"
6. **Copia el token inmediatamente** (no lo podrás ver de nuevo)

### 2. **Configurar en Vercel**
1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Ve a **Settings** → **Environment Variables**
4. Agrega estas variables:

```
VITE_GITHUB_USERNAME = tu_username_de_github
VITE_GITHUB_TOKEN = tu_token_generado
```

### 3. **Redeploy**
1. Ve a la pestaña **Deployments**
2. Haz clic en "Redeploy" en el último deployment
3. Espera a que termine el deploy

## 🔍 Verificar la configuración:

### En el navegador:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña **Console**
3. Busca los logs que empiecen con 🔧
4. Deberías ver algo como:
```
🔧 Variables de entorno cargadas: {
  VITE_GITHUB_USERNAME: "tu-username",
  VITE_GITHUB_TOKEN: "TOKEN_PRESENTE",
  USERNAME_FINAL: "tu-username",
  TOKEN_FINAL: "TOKEN_PRESENTE"
}
```

## ❌ Problemas comunes:

### Error 401 - Token inválido:
- Verifica que el token esté correctamente copiado
- Asegúrate de que tenga los permisos correctos
- Regenera el token si es necesario

### Error 403 - Límite excedido:
- El token te da más requests por hora
- Sin token: 60 requests/hora
- Con token: 5000 requests/hora

### Error 404 - Usuario no encontrado:
- Verifica que el username sea correcto
- Asegúrate de que el usuario sea público

## 🛠️ Desarrollo local:

Para desarrollo local, crea un archivo `.env.local` en la raíz del proyecto:

```env
VITE_GITHUB_USERNAME=tu-username
VITE_GITHUB_TOKEN=tu-token
```

## 📝 Notas importantes:

- **Nunca** subas el token al repositorio
- El token debe empezar con `ghp_`
- Los tokens expiran, regenera si es necesario
- Para producción, siempre usa variables de entorno en Vercel 