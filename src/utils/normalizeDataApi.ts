import { Character, Episode, Location, TAllEpisodesResponse } from '~/typed/index'

export const normalizeCharacters = (characters: Character[]) => {
  const dataCharacters = characters.map(character => {
    const characterNormalize = {
      id: character.id,
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species,
    }
    return Object.values(characterNormalize)
  })

  return dataCharacters
}

export const normalizeLocations = (locations: Location[]) => {
  const dataLocations = locations.map(location => {
    const locationNormalize = {
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      url: location.url,
      created: location.created,
    }
    return Object.values(locationNormalize)
  })

  return dataLocations
}

export const normalizeEpisodes = (episodes: Episode[]) => {
  const dataEpisodes = episodes.map(episode => {
    const episodeNormalize = {
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      url: episode.url,
      created: episode.created
    }
    return Object.values(episodeNormalize)
  })

  return dataEpisodes
}