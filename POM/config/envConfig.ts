import dotenv from 'dotenv';

dotenv.config({path:`environments/.env`});

export const envConfig = {
    baseURL: process.env.BASE_URL!,
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!
};