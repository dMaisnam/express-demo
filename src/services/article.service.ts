import { v4 as uuid } from "uuid"
import { connect } from "../lib/db"
import { IArticle } from "../lib/types"

const fetchAllArticles = () => connect().get("articles").value()

const fetchArticleById = (id: string) => connect().get("articles").find({ id }).value()

const createNewArticle = (body: IArticle) => {
  const { title, excerpt } = body
  const newArticle = { 
    id: uuid(), 
    title, 
    excerpt, 
    created: new Date().toISOString(), 
    updated: new Date().toISOString() 
  }
  connect().get("articles").push(newArticle).write()
  return newArticle
}

const updateArticle = (id: string, body: IArticle) => connect().get("articles").find({ id }).assign({ ...body, updated: new Date().toISOString() }).write()

const removeArticle = (id: string) => connect().get("articles").remove({ id }).write()

export {
  fetchAllArticles,
  fetchArticleById,
  createNewArticle,
  updateArticle,
  removeArticle
}