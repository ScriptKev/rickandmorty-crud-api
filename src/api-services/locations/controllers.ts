import { Request, Response } from 'express'
import { ResultSetHeader, QueryError } from 'mysql2'
import db from '~/db/connection'

export const getLocations = (req: Request, res: Response) => {
  db.query(`SELECT * FROM locations`, (err: QueryError, results: ResultSetHeader) => {
    err && console.log('getLocations', err.message)
    console.log('SELECT * FROM locations Results', results)

    res.status(200).json(results)
  })
}
