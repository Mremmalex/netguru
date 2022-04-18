import { Request, Response, NextFunction } from "express";
import { secret_key } from "../app";
import jwt from "jsonwebtoken";

export default function requiredUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const bearerHeader = req.headers["authorization"];
	if (!bearerHeader)
		return res.status(403).json({ error: "No Credential sent !" });
	const bearerToken = bearerHeader.split(" ");
	const token = bearerToken[1];
	try {
		jwt.verify(token, secret_key);
	} catch (error: any) {
		console.log(error.message);
		return res.status(401).json({ error: error.message });
	}
	req.params.accessToken = token;
	next();
}
