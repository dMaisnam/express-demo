import * as yup from "yup"

let postArticleSchema = yup.object().shape({
  title: yup.string().strict().required("title is required"),
  excerpt: yup.string().strict().required("excerpt is required")
})

let putArticleSchema = yup.object().shape({
  title: yup.string().strict(),
  excerpt: yup.string().strict()
})

export {
  postArticleSchema,
  putArticleSchema
}