import dotenv from 'dotenv';

dotenv.config();

const MY_SERVER_URL = process.env.MY_SERVER_URL || 'http://localhost:8080'

const API = {
    myserverurl: MY_SERVER_URL
}

const config = {
    api: API
}

export default config;