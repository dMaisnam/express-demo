import { Router } from "express"
import { 
  getArticles, 
  deleteArticle,
  getArticle, 
  postArticle,
  putArticle 
} from "../controllers/article.controller"
import { 
  postArticleSchema, 
  putArticleSchema 
} from "../schema/article.schema"
import validate from "../middlewares/validate"

const router = Router()

router.get("/", getArticles)
router.post("/", validate(postArticleSchema), postArticle)
router.get("/:id", getArticle)
router.put("/:id", validate(putArticleSchema), putArticle)
router.delete("/:id", deleteArticle)

export default router