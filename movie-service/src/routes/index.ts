import { Express, Request, Response } from "express";
import {
	get_post_handler,
	post_movie_handler,

} from "../controllers/MovieController";
import requiredUser from "../middleware/requireUser";

function routes(app: Express) {
	app.get("/movies", requiredUser, get_post_handler);

	app.post("/movies", requiredUser, post_movie_handler);
}

export default routes;
