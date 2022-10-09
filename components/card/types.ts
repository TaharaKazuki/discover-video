export type SizeType = 'large' | 'medium' | 'small'
export type ImgUrlType = string

export type VideoType = {
  title: Item['snippet']['title']
  imgUrl: Item['snippet']['thumbnails']['high']['url']
  id: Item['id']['videoId']
}[]

export interface YoutubeApiResponse {
  items: Item[]
  error?: Error
}

export interface Item {
  kind: string
  etag: string
  id: ID
  snippet: Snippet
  imgUrl?: string
}

export interface ID {
  kind: string
  videoId: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface Thumbnails {
  default: Default
  medium: Default
  high: Default
}

export interface Default {
  url: string
  width: number
  height: number
}
