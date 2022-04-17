import mongoose from "mongoose";

async function mongoConnection(DB_URL: any) {
	try {
		await mongoose.connect(DB_URL, () => {
			console.log("database connected");
		});
	} catch (error: any) {
		console.error(error.message);
	}
}

export default mongoConnection;
