import { Field, QueryError, ResultSetHeader } from 'mysql2'
import db from './connection'
import { createInitTables } from './queries'

const initDatabase = () => {
  console.log('💾 Connection to the database successful!')

  db.query('SELECT * FROM characters', async (err: QueryError, result: ResultSetHeader, fields: Field) => {
    err && console.log('Check characters table =>', err.message)
    console.info('Fields of characters table =>', fields?.length)

    result === undefined
      ? createInitTables()
      : console.info('the tables are already started')
  })
}

export { db, initDatabase }