import { $axios } from '~/utils/api'

export const getPlaybackState = () => {
  return $axios.$get(`https://api.spotify.com/v1/me/player`)
}
