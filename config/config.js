require('dotenv').config();

const config = {
    email: process.env.email || '',
    password: process.env.password || '',
    emailInvalid: process.env.emailInvalid || '',
    passwordInvalid: process.env.passwordInvalid || '',
    url: process.env.url || '',
    name: process.env.name || '',
    emailNew: process.env.emailNew || '',
    subject: process.env.subject || '',
    message: process.env.message || '',
    TOKEN: process.env.TOKEN || '',
    clientId: process.env.clientId || '',
    clientSecret: process.env.clientSecret || ''
};

module.exports = config;
