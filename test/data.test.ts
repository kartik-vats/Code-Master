import { describe, expect, test } from "vitest";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

describe("Data folder validation", () => {
  test("data folder should not contain empty files", () => {
    const files = fs.readdirSync(dataDir);

    const emptyFiles = files.filter((file) => {
      const filePath = path.join(dataDir, file);

      return fs.statSync(filePath).isFile() &&
             fs.statSync(filePath).size === 0;
    });

    expect(emptyFiles).toEqual([]);
  });

  test("data folder should contain files", () => {
    const files = fs.readdirSync(dataDir);

    expect(files.length).toBeGreaterThan(0);
  });
});

describe("LeetCode links", () => {
  test("all LeetCode links should have valid URLs", async () => {
    const files = fs
      .readdirSync(dataDir)
      .filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const content = fs.readFileSync(
        path.join(dataDir, file),
        "utf-8"
      );

      const urls = content.match(
        /https:\/\/leetcode\.com\/problems\/[a-zA-Z0-9-]+\/?/g
      ) || [];

      for (const url of urls) {
        expect(url).toMatch(
          /^https:\/\/leetcode\.com\/problems\/[a-zA-Z0-9-]+\/?$/
        );
      }
    }
  });
});