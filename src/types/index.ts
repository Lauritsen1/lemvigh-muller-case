export interface Story {
  id: number
  title: string
  url: string
  time: number
  score: number
  by: string
}

export interface User {
  id: string
  karma: number
  created: number
}
