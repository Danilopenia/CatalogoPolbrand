console.log("holaa");
// Función para abrir el enlace de WhatsApp con el nombre del producto
function openWhatsApp(productName) {
    // Reemplaza 1234567890 con el número de teléfono al que deseas enviar el mensaje de WhatsApp, incluyendo el código de país
    var phoneNumber = '1126382087';
  
    // Crea el mensaje concatenando el nombre del producto al enlace de WhatsApp
    var message = '¡Hola! Estoy interesado en el producto: ' + productName;
  
    // Codifica el mensaje para asegurar que los caracteres especiales se manejen correctamente en la URL
    var encodedMessage = encodeURIComponent(message);
  
    // Crea el enlace de WhatsApp con el número de teléfono y el mensaje
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
  
    // Abre la ventana de WhatsApp
    window.open(whatsappLink, '_blank');
  }