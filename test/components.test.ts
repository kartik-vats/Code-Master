import { describe, expect, test } from "vitest";
import fs from "fs";

describe("Project structure", () => {
  test("package.json should exist", () => {
    expect(fs.existsSync("package.json")).toBe(true);
  });

  test("data folder should exist", () => {
    expect(fs.existsSync("data")).toBe(true);
  });

  test("Next.js app should exist", () => {
    expect(fs.existsSync("app")).toBe(true);
  });
});