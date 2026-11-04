import { test, describe } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

function getAllKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  let keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value as Record<string, unknown>, fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys.sort();
}

describe("Translation Parity Check", () => {
  const enPath = path.resolve("./messages/en.json");
  const idPath = path.resolve("./messages/id.json");

  const enMessages = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  const idMessages = JSON.parse(fs.readFileSync(idPath, "utf-8"));

  const enKeys = getAllKeys(enMessages);
  const idKeys = getAllKeys(idMessages);

  test("English and Indonesian have identical key counts", () => {
    assert.strictEqual(enKeys.length, idKeys.length);
  });

  test("Every English key exists in Indonesian", () => {
    const missingInId = enKeys.filter((k) => !idKeys.includes(k));
    assert.deepStrictEqual(missingInId, []);
  });

  test("Every Indonesian key exists in English", () => {
    const missingInEn = idKeys.filter((k) => !enKeys.includes(k));
    assert.deepStrictEqual(missingInEn, []);
  });
});

