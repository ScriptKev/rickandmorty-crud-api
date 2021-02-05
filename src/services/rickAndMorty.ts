import fetch from 'node-fetch'

export const getApiCharacters = async () => {
  return await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
}

// export const getApiEpisodes = async () => {
//   try {

//     const res = await Promise.all([
//       fetch('https://rickandmortyapi.com/api/episode?page=1').then(res => res.json()),
//       fetch('https://rickandmortyapi.com/api/episode?page=2').then(res => res.json()),
//       fetch('https://rickandmortyapi.com/api/episode?page=3').then(res => res.json())
//     ])

//     return res.map(resItem => resItem.results)

//   } catch (err) {
//     console.error(err)
//   }
// }

export const getApiEpisodes = async () => {
  return await fetch('https://rickandmortyapi.com/api/episode')
    .then(res => res.json())
}


export const getApiLocations = async () => {
  return await fetch('https://rickandmortyapi.com/api/location')
    .then(res => res.json())
}
