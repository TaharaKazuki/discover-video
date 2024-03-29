export const IMG_DOMAIN = 'images.unsplash.com'

export const IMG_URL = `https://${IMG_DOMAIN}/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80`

export const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3'

export const YOUTUBE_REQUEST_URL = (url: string, apiKey: string) =>
  `${YOUTUBE_BASE_URL}/${url}&maxResults=25&key=${apiKey}`
