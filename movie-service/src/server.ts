import app from "./app";
import dotenv from "dotenv";
import mongoConnection from "./model/db";
import routes from "./routes";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server runing on port ${PORT}`);
	mongoConnection(process.env.DB_URL);
	routes(app);
});
