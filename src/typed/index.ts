export type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type Character = {
  id: number
  name: string
  status: string
  species: string
  image: string
  created: string
}

export type TCharacter = {
  id: number
  name: string
  status: string
  species: string
  image: string
  created: string
}

export type TDataNormalize = {
  id: number
  name: string
  status: string
  species: string
  image: string
  created: string
  location: {
    name: string
    url: string
  }
  episodes: string[]
}

export type Characters = {
  info: Info
  results: [Character]
}


export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters?: string[]
  url: string
  created: string
}

export type TAllEpisodesResponse = [
  Episode[]
]

export type Episodes = {
  info: Info
  results: [Episode]
}

export type Location = {
  id: number
  name: string
  type: string
  dimension: string
  residents: [Character]
  url: string
  created: string
}

export type Locations = {
  info: Info
  results: [Location]
}

export type TCharacterNormalize = [
  [
    number,
    string,
    string,
    string,
    string,
    string
  ]
]