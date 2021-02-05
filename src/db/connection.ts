import mysql from 'mysql2'
import config from '~/config'
const { DB: { HOST, USER, DATABASE, PASSWORD, PORT } } = config

export default mysql.createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  port: PORT
})
