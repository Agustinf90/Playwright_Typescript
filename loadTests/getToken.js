const axios = require('axios');
const fs = require('fs');
const config = require('../config/config.js'); 

async function getToken() {
  try {
    const response = await axios.post('https://api.sirv.com/v2/token', {
      clientId: config.clientId,
      clientSecret: config.clientSecret
    });
    if (response.status !== 200) {
      throw new Error('Failed to get token');
    }

    const responseJson = response.data;
    console.log(response.data)
    return responseJson;
  } catch (error) {
    console.error('Error getting token:', error);
    throw error;
  }
}

getToken().then(token => {
}).catch(error => {
});
