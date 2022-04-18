import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import Movie from "../model/MovieSchema";
import { movie_api_key, auth_url } from "../app";
import verifyToken from "../utils/jwt";

export async function post_movie_handler(req: Request, res: Response) {
	const { title } = req.body;
	if (!title) return res.status(401).json({ error: "invalid payload" });
	const decoded = verifyToken(req.params.accessToken);

	if (decoded.role === "basic") {
		let userExpDate: Date = new Date(decoded.exp);
		let currentDate: Date = new Date();

		currentDate.setMonth(currentDate.getMonth());
		console.log(userExpDate);
		console.log(currentDate);

		const movies = await Movie.find({ userId: decoded.userId });

		if (userExpDate >= currentDate) {
			if (movies.length == 5) {
				return res.status(200).json({
					message: "you have exceded the number of slot alocated to you",
				});
			} else {
				try {
					const fetchRes = await axios.get(
						`http://www.omdbapi.com/?t=${title}&apikey=${movie_api_key}`
					);
					const data = await fetchRes.data;

					const movie = await Movie.create({
						userId: decoded.userId,
						title: data.Title,
						released: data.Released,
						genre: data.Genre,
						director: data.Director,
					});
					return res.status(200).json({ action: "ok", data: movie });
				} catch (error: any) {
					return res.status(400).json({ error: error.message });
				}
			}
		} else {
			return res.status(200).json({
				message: "you account has expired please renew your subscription",
			});
		}
	} else {
		if (decoded.role === "premium") {
			try {
				const fetchRes = await axios.get(
					`http://www.omdbapi.com/?t=${title}&apikey=${movie_api_key}`
				);
				const data = await fetchRes.data;

				const movie = await Movie.create({
					userId: decoded.userId,
					title: data.Title,
					released: data.Released,
					genre: data.Genre,
					director: data.Director,
				});
				return res.status(200).json({ action: "ok", data: movie });
			} catch (error: any) {
				return res.status(400).json({ error: error.message });
			}
		}
	}
}

export async function get_post_handler(req: Request, res: Response) {
	try {
		const decoded = verifyToken(req.params.accessToken);

		const movies = await Movie.find({ userId: decoded.userId });
		return res.status(200).json({ action: "ok", data: movies });
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
}
