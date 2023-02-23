import { Request, Response, Router } from "express";
import TodoRouter from "./todo.router";

const router = Router();

router.use("/_check", (_req: Request, res: Response) =>
  res.status(200).send("Server status: OK 👍")
);

router.use("/todos", TodoRouter);

export default router;
