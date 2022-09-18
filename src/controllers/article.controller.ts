import { Handler, Request, Response } from "express"
import { 
  fetchAllArticles, 
  fetchArticleById, 
  createNewArticle, 
  updateArticle, 
  removeArticle
} from "../services/article.service"

const getArticles: Handler = async (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const articles = await fetchAllArticles()
    res.status(200).json({ success: true, data: articles })
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong : ${err}` })
  }
}

const getArticle: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const article = await fetchArticleById(req.params.id)
    if (!article) return res.status(404).json({ message: 'Article not found' })
    res.status(200).json({ success: true, data: article })
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong : ${err}` })
  }
}

const postArticle: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const body = req.body
    const newArticle = await createNewArticle(body)
    res.status(201).json({ success: true, data: newArticle })
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong : ${err}` })
  }
}

const putArticle: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const article = await fetchArticleById(req.params.id)
    if (!article) return res.status(404).json({ message: 'Article not found' })
    
    const updated = updateArticle(req.params.id, req.body)
    res.status(201).json({ success: true, data: updated })
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong : ${err}` })
  }
}

const deleteArticle: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const article = await fetchArticleById(req.params.id)
    if (!article) return res.status(404).json({ message: 'Article not found' })
    
    removeArticle(req.params.id)
    res.status(200).json({ success: true, message: "Successfull deleted article" })
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong : ${err}` })
  }
}

export {
  getArticles,
  getArticle,
  postArticle,
  putArticle,
  deleteArticle
}