import express, { Express } from "express";
import cors from "cors";

import AppRouter from "./src/routes";
import { HOST, PORT } from "./src/lib/constants";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", AppRouter);

app.listen(PORT, HOST, () =>
  console.log(`Server running on port http://${HOST}:${PORT}`)
);
