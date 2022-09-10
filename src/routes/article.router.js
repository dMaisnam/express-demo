import { Router } from "express"
import { 
  getArticles, 
  deleteArticle,
  getArticle, 
  postArticle,
  putArticle 
} from "../controllers/article.controller.js"

const router = Router()

router.get("/", getArticles)
router.post("/", postArticle)
router.get("/:id", getArticle)
router.put("/:id", putArticle)
router.delete("/:id", deleteArticle)

export default router