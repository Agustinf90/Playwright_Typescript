const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const config = require('../config/config.js'); 

async function uploadFile() {
  try {
    const url = 'https://upload.uploadcare.com/base/'; 
    const file = './utils/notice3.png'; 

    const formData = new FormData();
    formData.append('UPLOADCARE_PUB_KEY', config.PUBLIC_KEY);
    formData.append('file', fs.createReadStream(file), {
      filename: file,
      contentType: 'image/png', 
    });
    formData.append('title', 'Logo of Business');

    const options = {
      headers: {
        ...formData.getHeaders(),
        Accept: '*/*',
      },
    };

    const response = await axios.post(url, formData, options);
    console.log('Upload successful:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

uploadFile()
  .then((data) => {
    console.log('Response:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

module.exports = { uploadFile };
