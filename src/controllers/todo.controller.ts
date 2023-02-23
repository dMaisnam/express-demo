import { Handler, Request, Response } from "express";
import TodoService from "../services/todo.service";

const getAll: Handler = async (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const articles = await TodoService.getAllService();

    res.status(200).json({
      success: true,
      data: articles,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong : ${err}`,
    });
  }
};

const getById: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const article = await TodoService.getByIdService(Number(req.params.id));
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong : ${err}`,
    });
  }
};

const post: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const body = req.body;
    const newArticle = await TodoService.postService(body);

    res.status(201).json({
      success: true,
      data: newArticle,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong : ${err}`,
    });
  }
};

const putById: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const article = await TodoService.getByIdService(Number(req.params.id));
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });

    const updated = TodoService.putByIdService(Number(req.params.id), req.body);

    res.status(201).json({
      success: true,
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong : ${err}`,
    });
  }
};

const deleteById: Handler = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const article = await TodoService.getByIdService(Number(req.params.id));
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });

    TodoService.deleteByIdService(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Successfull deleted resource",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong : ${err}`,
    });
  }
};

export default {
  getAll,
  getById,
  post,
  putById,
  deleteById,
};
