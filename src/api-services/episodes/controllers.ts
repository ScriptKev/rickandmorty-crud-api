import { Request, Response } from 'express'
import { ResultSetHeader, QueryError } from 'mysql2'
import db from '~/db/connection'

export const getEpisodes = (req: Request, res: Response) => {
  db.query(`SELECT * FROM episodes`, (err: QueryError, results: ResultSetHeader) => {
    err && console.log('getEpisodes', err.message)
    console.log('SELECT * FROM episodes Results', results)

    res.status(200).json(results)
  })
}
