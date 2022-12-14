import express, { Express, Request, Response } from "express"
import cors from "cors"

import articleRouter from "./src/routes/article.router"
import { HOST, PORT } from "./src/lib/constants"

const app: Express = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/_check", (_req: Request, res: Response) => res.status(200).send("Server status: OK 👍"))

app.use("/v1/articles", articleRouter)

app.listen(PORT, HOST, () => console.log(`Server running on port http://${HOST}:${PORT}`))