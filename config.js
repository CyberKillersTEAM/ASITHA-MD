
const envv2 = require('./config-db')
var GITHUB_AUTH_TOKEN;
var GITHUB_USERNAME;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN
} else {
GITHUB_AUTH_TOKEN = "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" //envv2.GITHUB_AUTH_TOKEN
}

if(process.env.GITHUB_USERNAME){
GITHUB_USERNAME = process.env.GITHUB_USERNAME
} else {
GITHUB_USERNAME = "CyberKillersTEAM" //envv2.GITHUB_USERNAME
}


if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
} else {
SESSION_ID = "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=njgRWTJQ#e0dmJNRwYRATDke_tFtQzSQfV2vL9_rKfHy1UJVab70" //envv2.SESSION_ID
}

module.exports = {
SESSION_ID,
GITHUB_USERNAME,
GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://isurumongo:isurumongo1@cluster0.ikguzro.mongodb.net/"    
};
