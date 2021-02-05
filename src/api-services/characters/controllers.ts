import { Request, Response } from 'express'
import { ResultSetHeader, QueryError } from 'mysql2'
import db from '~/db/connection'

export const getCharacters = async (req: Request, res: Response) => {
  db.query(`SELECT * FROM characters`, (err: QueryError, results: ResultSetHeader) => {
    err && console.log('getCharactersTable', err.message)
    console.log('SELECT * FROM characters Results', results)

    res.status(200).json(results)
  })
}

export const getCharacter = async (req: Request, res: Response) => {
  const id = req.params.id

  db.query(`SELECT * FROM characters WHERE id = ?`,
    [id],
    (err: QueryError, results: any) => {
      err && console.log('getCharactersTable', err.message)

      res.status(200).json(results[0])
    })
}

export const createCharacter = async (req: Request, res: Response) => {
  const name = req.body.name
  const status = req.body.status
  const species = req.body.species
  let image = req.body.image

  if (image === undefined) image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'

  db.query(`INSERT INTO characters (image, name, status, species) VALUES 
    ('${image}','${name}', '${status}','${species}')`)

  res.status(200)
    .json({ message: 'createCharacter' })
}

export const updateCharacter = async (req: Request, res: Response) => {
  const id = req.params.id
  const character = req.body

  db.query(`UPDATE characters SET ? WHERE id = ?`,
    [character, id],
    (err: QueryError, results: any) => {
      err && console.log('deleteCharacter', err.message)

      res.status(200).json({ message: 'Character Updated' })
    })
}

export const deleteCharacter = async (req: Request, res: Response) => {
  const id = req.params.id

  db.query(`DELETE FROM characters WHERE id = ?`,
    [id],
    (err: QueryError, results: any) => {
      err && console.log('deleteCharacter', err.message)

      res.status(200).json({ message: 'Character Deleted' })
    })
}