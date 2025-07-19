# 🔑 Configuración de GitHub Token

## 📋 **Pasos para Generar un Nuevo Token**

### **1. Ir a GitHub Settings**
1. Ve a: https://github.com/settings/tokens
2. Inicia sesión en tu cuenta de GitHub

### **2. Generar Nuevo Token**
1. Haz clic en **"Generate new token (classic)"**
2. Selecciona **"Generate new token (classic)"**
3. Dale un nombre descriptivo: `Portafolio API`

### **3. Configurar Permisos**
Selecciona estos permisos:
- ✅ **repo** - Acceso completo a repositorios
- ✅ **read:user** - Leer información del usuario
- ✅ **read:email** - Leer email del usuario

### **4. Generar y Copiar**
1. Haz clic en **"Generate token"**
2. **Copia inmediatamente** el token (solo se muestra una vez)
3. Guárdalo en un lugar seguro

### **5. Actualizar .env**
Reemplaza el token en tu archivo `.env`:

```env
VITE_GITHUB_TOKEN=ghp_tu_nuevo_token_aqui
```

### **6. Reiniciar el Servidor**
```bash
npm run dev
```

---

## ⚠️ **Importante:**
- Los tokens de GitHub expiran
- Guárdalo en un lugar seguro
- No lo compartas públicamente
- Si se compromete, revócalo inmediatamente 