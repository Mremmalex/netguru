import jwt from "jsonwebtoken";
import { secret_key } from "../app";

export default function verifyToken(token: any) {
	try {
		const decoded = jwt.verify(token, secret_key);
		return decoded;
	} catch (error: any) {
		console.log(error.message);
		return error.message;
	}
}
