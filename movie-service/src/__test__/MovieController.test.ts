import app from "../app";
import request from "supertest";
import "dotenv/config"

let token = " ";

const payload = {
	title: "thor",
};

const WronguserData = {
	username: "wronguser",
	password: "wrongpassword",
};

const userData = {
	username : process.env.TUSERNAME,
	password : process.env.TPASSWORD
}

beforeAll(() => {
	request(app)
		.post("/auth")
		.send(userData)
		.end((err, res) => {
			var result = JSON.parse(res.text);
			token = result.token;
		});
});

describe("post method movie endpoint testing", () => {
	it("testing the post when no header and auth is passed", async () => {
		const res = await request(app).post("/movies").send();
		expect(res.statusCode).toBe(403);
	});

	it("testing post movies endpoint when no data is passed and auth is present", async () => {
		const res = await request(app)
			.post("/movies")
			.set("Authorization", "Bearer " + token)
			.send();
		expect(res.statusCode).toBe(401);
	});

	it("testing when data is in request no auth", async () => {
		const res = await request(app).post("/movies").send(payload);
		expect(res.statusCode).toBe(403);
	});


});

describe("get method for movie endpoint", () => {
	it("testing endpoint when no auth token is passed into header", async () => {
		const res = await request(app).get("/movies");
		expect(res.statusCode).toBe(403);
	});

	
});


describe("testing the auth route",  () => {
	it("testing the auth with wrong info", async () => {
		const res = await request(app).post("/auth").send(WronguserData)
		expect(res.statusCode).toBe(401)
	})

		it("testing the auth with correct info", async () => {
		const res = await request(app).post("/auth").send(userData)
		expect(res.statusCode).toBe(200)
	})
})