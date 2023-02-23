import * as yup from "yup"

let postTodoSchema = yup.object().shape({
  title: yup.string().strict().required("title is required"),
  completed: yup.boolean().required("completed is required")
})

let putTodoSchema = yup.object().shape({
  title: yup.string().strict(),
  completed: yup.boolean()
})

export default {
  postTodoSchema,
  putTodoSchema
}