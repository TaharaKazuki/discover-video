import { YOUTUBE_REQUEST_URL } from 'constants/path'
import { YoutubeApiResponse } from 'components/card/types'

export const getCommonVideos = async (URL: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

  try {
    const response = await fetch(YOUTUBE_REQUEST_URL(URL, YOUTUBE_API_KEY!))
    const data = (await response.json()) as YoutubeApiResponse

    if (data?.error) {
      console.error('Youtube API error', data.error)
      return []
    }
    return data.items.map((item) => {
      const id = item.id?.videoId || item.id
      return {
        title: item.snippet?.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      }
    })
  } catch (error) {
    console.error('Something went wrong with video library', error)
    return []
  }
}

export const getVideos = async (searchQuery: string) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`
  return getCommonVideos(URL)
}

export const getPopularVideos = () => {
  const URL = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=JP'
  return getCommonVideos(URL)
}
