import { YOUTUBE_REQUEST_URL } from 'constants/path'
import { YoutubeApiResponse } from 'components/card/types'

export const getVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

  const response = await fetch(`${YOUTUBE_REQUEST_URL}${YOUTUBE_API_KEY}`)

  const data = (await response.json()) as YoutubeApiResponse

  return data.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item.id.videoId,
    }
  })
}
