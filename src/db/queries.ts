import { ResultSetHeader, QueryError } from 'mysql2'
import { Characters, Episodes, Locations } from '~/typed'
import { getApiCharacters, getApiEpisodes, getApiLocations } from '~/services/rickAndMorty'
import { normalizeCharacters, normalizeEpisodes, normalizeLocations } from '~/utils/normalizeDataApi'
import db from './connection'

export const createCharactersTable = () => {
  db.query(`CREATE TABLE characters (
    id INT(3) NOT NULL AUTO_INCREMENT,
    image VARCHAR(100),
    name VARCHAR(200),
    status VARCHAR(30),
    species VARCHAR(30),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );`,
    (err: QueryError) => {
      err && console.error('createCharactersTable', err.message)
    }
  )
}

export const insertCharactersIntoTable = (characters: any) => { // change type
  db.query('INSERT INTO characters (id, image, name, status, species) VALUES ?',
    [characters],
    (err: QueryError, results: ResultSetHeader) => {
      err && console.error('insertCharactersIntoTable', err.message)
      console.log('INSERT INTO characters => Results', results?.info)
    })
}

export const createEpisodesTable = () => {
  db.query(`CREATE TABLE episodes (
    id INT(3) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    air_date VARCHAR(50) NOT NULL,
    episode VARCHAR(50) NOT NULL,
    url VARCHAR(60) NOT NULL,
    created VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  );`,
    (err: QueryError) => {
      err && console.error('createEpisodesTable', err.message)
    }
  )
}


export const insertEpisodesIntoTable = (episodes: any) => { // change type
  db.query('INSERT INTO episodes (id, name, air_date, episode, url, created) VALUES ?',
    [episodes],
    (err: QueryError, results: ResultSetHeader) => {
      err && console.error('insertEpisodesIntoTable', err.message)
      console.log('INSERT INTO episodes => Results', results?.info)
    })
}

export const createLocationsTable = () => {
  db.query(`CREATE TABLE locations (
    id INT(3) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    dimension VARCHAR(50) NOT NULL,
    url VARCHAR(60) NOT NULL,
    created VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  );`,
    (err: QueryError) => {
      err && console.error('createLocationsTable', err.message)
    }
  )
}

export const insertLocationsIntoTable = (locations: any) => { // change type
  db.query('INSERT INTO locations (id, name, type, dimension, url, created) VALUES ?',
    [locations],
    (err: QueryError, results: ResultSetHeader) => {
      err && console.error('insertLocationsIntoTable', err.message)
      console.log('INSERT INTO locations => Results', results?.info)
    })
}

export const checkCharactersTable = () => {
  db.query(`DESCRIBE characters`, (err: QueryError, results: ResultSetHeader) => {
    err && console.log('checkCharactersTable', err.message)
    console.log('DESCRIBE characters Results', results)
  })
}

export const createInitTables = async () => {
  const characters: Characters = await getApiCharacters()
  const episodes: any = await getApiEpisodes()
  const locations: Locations = await getApiLocations()

  const dataCharacters = normalizeCharacters(characters.results)
  const dataLocations = normalizeLocations(locations.results)
  const dataEpisodes = normalizeEpisodes(episodes.results)

  createCharactersTable()
  insertCharactersIntoTable(dataCharacters)

  createLocationsTable()
  insertLocationsIntoTable(dataLocations)

  createEpisodesTable()
  insertEpisodesIntoTable(dataEpisodes)
}