export interface IArticle {
  id?: string
  title?: string
  excerpt?: string
  created?: string
  updated?: string
}

export type Schema = {
  articles: IArticle[]
}