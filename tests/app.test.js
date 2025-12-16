const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
	test("It should respond with Hello, World!", async () => {
		const response = await request(app).get("/");
		expect(response.statusCode).toBe(200);
		expect(response.text).toBe("Hello, World!");
	});
});

describe("Test the /status path", () => {
	test("It should respond with status OK and a timestamp", async () => {
		const response = await request(app).get("/status");
		expect(response.body.status).toBe("OK");
		expect(response.statusCode).toBe(200);
		expect(response.body.timestamp).toBeDefined();
	});
});

describe("Test the /version path", () => {
	test("It should respond with version 1.0.1", async () => {
		const response = await request(app).get("/version");
		expect(response.body.version).toBe("1.0.1");
		expect(response.statusCode).toBe(200);
	});
});
