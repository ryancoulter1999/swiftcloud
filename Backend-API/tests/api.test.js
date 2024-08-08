const request = require("supertest");
const app = require("../server"); // Adjust the path to your main app file

describe("API Endpoints", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Welcome to SwiftCloud API!");
  });

  it("should return a list of all songs", async () => {
    const res = await request(app).get("/songs");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return a list of songs with total plays", async () => {
    const res = await request(app).get("/songs/with-total-plays");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach((song) => {
      expect(song).toHaveProperty("plays");
    });
  });

  it("should return a list of songs by year", async () => {
    const res = await request(app).get("/songs/year/2020");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach((song) => {
      expect(song).toHaveProperty("year", "2020");
    });
  });

  it("should return the most popular songs last month", async () => {
    const res = await request(app).get("/songs/popular/month");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return the most popular songs of all time", async () => {
    const res = await request(app).get("/songs/popular/all");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should search for songs", async () => {
    const res = await request(app).get("/songs/search?q=test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
