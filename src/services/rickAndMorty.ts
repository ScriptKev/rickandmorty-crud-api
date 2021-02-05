import fetch from 'node-fetch'

export const getApiCharacters = async () => {
  return await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
}

export const getApiEpisodes = async () => {
  return await fetch('https://rickandmortyapi.com/api/episode')
    .then(res => res.json())
}


export const getApiLocations = async () => {
  return await fetch('https://rickandmortyapi.com/api/location')
    .then(res => res.json())
}
