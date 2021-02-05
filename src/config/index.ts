import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || 3500,
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    DATABASE: process.env.DB_DATABASE,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: Number(process.env.DB_PORT) || 3306
  }
}