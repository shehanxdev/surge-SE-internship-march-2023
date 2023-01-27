const request = require("supertest");
const app = require("../index");

//Custom sort testing function which tests the order of received posts
const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (current.createdAt < next.createdAt) {
      return false;
    }
    if (current.createdAt === next.createdAt && current.likes < next.likes) {
      return false;
    }
  }
  return true;
};

describe("GET /posts", () => {
  it("should fetch all posts and sort them according to timestamp and likes", async () => {
    const res = await request(app).get("/posts").expect(200);
    console.log(res.body);
    expect(isSorted(res.body)).toStrictEqual(true);
  });
});
