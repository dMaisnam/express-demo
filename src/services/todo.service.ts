import prisma from "../lib/db";
import { ITodo } from "../lib/types";

const getAllService = async () => {
  const payload = await prisma.todo.findMany();

  return payload;
};

const getByIdService = async (id: number) => {
  const payload = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  return payload;
};

const postService = async (body: ITodo) => {
  const { title, completed } = body;

  const payload = await prisma.todo.create({
    data: {
      title,
      completed,
    },
  });

  return payload;
};

const putByIdService = async (id: number, body: ITodo) => {
  const { title, completed } = body;

  const payload = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      completed,
    },
  });

  return payload;
};

const deleteByIdService = async (id: number) => {
  const payload = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return payload;
};

export default {
  getAllService,
  getByIdService,
  postService,
  putByIdService,
  deleteByIdService,
};
