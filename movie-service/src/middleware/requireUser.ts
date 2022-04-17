import { Request, Response, NextFunction } from "express";

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
	req.params.accessToken = token;
	next();
}
