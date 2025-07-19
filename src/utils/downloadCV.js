/**
 * Función para descargar el CV en PDF
 * @param {string} filename - Nombre del archivo a descargar
 * @param {string} displayName - Nombre que se mostrará al usuario
 */
export const downloadCV = async (filename = 'HV Miguel Alvarez.pdf', displayName = 'CV-Miguel-Alvarez.pdf') => {
  try {
    // Verificar que el archivo existe
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Archivo no encontrado: ${filename}`);
    }

    // Obtener el blob del archivo
    const blob = await response.blob();
    
    // Crear URL del blob
    const url = window.URL.createObjectURL(blob);
    
    // Crear elemento de enlace
    const link = document.createElement('a');
    link.href = url;
    link.download = displayName;
    
    // Agregar al DOM temporalmente
    document.body.appendChild(link);
    
    // Simular clic
    link.click();
    
    // Limpiar
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    // Feedback visual
    console.log('CV descargado exitosamente');
    
  } catch (error) {
    console.error('Error al descargar CV:', error);
    
    // Fallback: abrir en nueva pestaña
    try {
      window.open(`/${filename}`, '_blank');
    } catch (fallbackError) {
      console.error('Error en fallback:', fallbackError);
      alert('Error al descargar el CV. Por favor, verifica que el archivo existe en la carpeta public/');
    }
  }
};

/**
 * Función para verificar si el archivo existe
 * @param {string} filename - Nombre del archivo a verificar
 * @returns {Promise<boolean>}
 */
export const checkFileExists = async (filename = 'CV-Miguel-Alvarez.pdf') => {
  try {
    const response = await fetch(`/${filename}`, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error verificando archivo:', error);
    return false;
  }
}; 