import test from "node:test";
import assert from "node:assert/strict";
import factorial from "../src/factorial.js";

test("Checks factorial of 0", () => {
  const run = factorial(0);
  const expects = 1;
  assert.strictEqual(run, expects);
});

test("Checks factorial of 1", () => {
  const run = factorial(1);
  const expects = 1;
  assert.strictEqual(run, expects);
});

test("Checks factorial of 5", () => {
  const run = factorial(5);
  const expects = 120;
  assert.strictEqual(run, expects);
});

test("Checks factorial of 10", () => {
  const run = factorial(10);
  const expects = 3628800;
  assert.strictEqual(run, expects);
});

test("Checks factorial of 15", () => {
  const run = factorial(15);
  const expects = 1307674368000;
  assert.strictEqual(run, expects);
});
