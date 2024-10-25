const request = require("supertest");
const app = require("../index");
const axios = require("axios");

jest.mock("axios");

describe("Express Server", () => {
  it("should respond with 'Server is running' on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Server is running");
  });

  it("should respond with 'Keep-alive is working!' on GET /keepalive", async () => {
    const response = await request(app).get("/keepalive");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Keep-alive is working!");
  });

  it("should fetch status for URL clusters on GET /status", async () => {
    axios.get.mockImplementation((url) => {
      if (url === "https://qrnotify.onrender.com") {
        return Promise.resolve({ status: 200 });
      } else if (url === "https://discord-cards.onrender.com/api/compact/784141856426033233") {
        return Promise.resolve({ status: 200 });
      } else if (url === "https://doc-appoint-server.onrender.com/") {
        return Promise.resolve({ status: 200 });
      } else if (url === "https://caw-server.onrender.com") {
        return Promise.resolve({ status: 200 });
      } else {
        return Promise.reject(new Error("Network Error"));
      }
    });

    const response = await request(app).get("/status");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "Cluster 1": {
        "https://qrnotify.onrender.com": 200,
        "https://discord-cards.onrender.com/api/compact/784141856426033233": 200,
      },
      "Cluster 2": {
        "https://doc-appoint-server.onrender.com/": 200,
        "https://caw-server.onrender.com": 200,
      },
    });
  });
});