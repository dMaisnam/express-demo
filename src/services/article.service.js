import { nanoid } from "nanoid"
import { connect } from "../lib/db.js"

const fetchAllArticles = () => connect().get("articles").value()

const fetchArticleById = (id) => connect().get("articles").find({ id }).value()

const createNewArticle = (body) => {
  const { title, excerpt } = body
  const newArticle = { 
    id: nanoid(), 
    title, 
    excerpt, 
    created: new Date().toISOString(), 
    updated: new Date().toISOString() 
  }
  connect().get("articles").push(newArticle).write()
  return newArticle
}

const updateArticle = (id, body) => connect().get("articles").find({ id }).assign({ ...body, updated: new Date().toISOString() }).write()

const removeArticle = (id) => connect().get("articles").remove({ id }).write()

export {
  fetchAllArticles,
  fetchArticleById,
  createNewArticle,
  updateArticle,
  removeArticle
}