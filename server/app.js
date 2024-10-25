import express from "express";
import { todoRouter } from "./routes/todo.route";

const app = express();


app.use("/api", )
app.use("/api",todoRouter)


export default app;
