import express, { Express } from "express";
import dotenv from "dotenv";
import mongoConnection from "./model/db";
import routes from "./routes";
dotenv.config();

// const PORT = process.env.PORT || 5000;

const app: Express = express();

export const movie_api_key = process.env.MOVIEDB_API_KEY;
export const secret_key: any = process.env.JWT_SECRET;
export const auth_url: any = process.env.AUTH_URL;

app.use(express.json());
app.use(express.urlencoded());

routes(app);

export default app;
