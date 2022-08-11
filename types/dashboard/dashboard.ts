export interface AlbumsInterface {
  albums: Albums
}

export interface Albums {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface Item {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
  tracks: Track
}

export interface Track {
  items: TrackItem[]
}

export interface TrackItem {
  artists: Artist[]
  duration_ms: number
  name: string
  track_number: number
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}
