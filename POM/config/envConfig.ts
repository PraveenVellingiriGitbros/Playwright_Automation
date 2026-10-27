import dotenv from 'dotenv';

dotenv.config({path:`environments/.env`});
console.log('BASE URL:', process.env.BASE_URL);

export const envConfig = {
    baseURL: process.env.BASE_URL!,
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!,
    invalidPwd: process.env.INVALID_PASSWORD!
};