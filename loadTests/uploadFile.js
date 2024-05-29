const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const config = require('../config/config.js'); 

async function uploadFile() {
  try {
    const url = 'https://upload.uploadcare.com/base/'; // URL del endpoint de carga
    const file = './utils/notice3.png'; // Ruta al archivo a cargar

    // Configurar los datos del formulario
    const formData = new FormData();
    formData.append('UPLOADCARE_PUB_KEY', config.PUBLIC_KEY);
    formData.append('file', fs.createReadStream(file), {
      filename: file,
      contentType: 'image/png', // Tipo MIME de la imagen (ajustar según sea necesario)
    });
    formData.append('title', 'Logo of Business');

    // Configurar las opciones de la solicitud
    const options = {
      headers: {
        ...formData.getHeaders(), // Obtiene los encabezados del formulario
        Accept: '*/*',
      },
    };

    // Realizar la solicitud POST
    const response = await axios.post(url, formData, options);
    console.log('Upload successful:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// Uso de la función de carga de archivos
uploadFile()
  .then((data) => {
    // Manejo de la respuesta
    console.log('Response:', data);
  })
  .catch((error) => {
    // Manejo de errores
    console.error('Error:', error);
  });

module.exports = { uploadFile };
