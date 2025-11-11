import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../server/src/index";

describe("API", () => {
  it("health returns ok:true", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
