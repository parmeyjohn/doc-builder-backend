import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get("", (req: Request, res: Response) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("[server]: Server is listening on port ", port);
});
