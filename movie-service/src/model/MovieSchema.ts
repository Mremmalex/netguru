import { Document, Schema, model } from "mongoose";

interface IMovie extends Document {
	userId: number;
	title: string;
	released: string;
	genre: string;
	director: string;
}

const MovieSchema = new Schema<IMovie>(
	{
		userId: { type: Number, required: true },
		title: { type: String },
		released: { type: String },
		genre: { type: String },
		director: { type: String },
	},
	{
		timestamps: true,
	}
);

const Movie = model<IMovie>("Movie", MovieSchema);

export default Movie;
