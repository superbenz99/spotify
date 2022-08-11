import { $axios } from '~/utils/api'

export const getNewReleases = () => {
  return $axios.$get('https://api.spotify.com/v1/browse/new-releases')
}
