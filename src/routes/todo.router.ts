import { Router } from "express";
import TodoController from "../controllers/todo.controller";
import TodoSchema from "../schema/todo.schema";
import validate from "../middlewares/validate";

const router = Router();

router.get("/", TodoController.getAll);
router.post("/", validate(TodoSchema.postTodoSchema), TodoController.post);
router.get("/:id", TodoController.getById);
router.put("/:id", validate(TodoSchema.putTodoSchema), TodoController.putById);
router.delete("/:id", TodoController.deleteById);

export default router;
