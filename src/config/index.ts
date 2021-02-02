import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || 3600,
  DB: {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    DATABASE: process.env.DB_DATABASE || 'rickandmorty',
    CONNECTION_LIMIT: process.env.CONNECTION_LIMIT || 10
  }
}