import { $axios } from '~/utils/api'

export const getAlbumTracks = (id: string) => {
  return $axios.$get(`https://api.spotify.com/v1/albums/${id}`)
}
