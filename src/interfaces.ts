export interface stringObject {
  [key: string]: any
}

export interface Posts extends stringObject {
  body: string
  id: number
  title: string
  userId: number
}

export interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Albums {
  userId: string
  id: number
  title: string
}

export interface Photos {
  albumId: string
  id: number,
  title: string,
  url: string
  thumbnailUrl: string
}

export interface Todos {
  userId: string
  id: number
  title: string
  completed: boolean
}