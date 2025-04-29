import { describe, it, expect } from "vitest";
import { multiply, vote, concatenateStrings } from "../patterns/guard";

describe("multiply", () => {
  it("returns NaN if either argument is not a number", () => {
    expect(multiply(1, "1")).toBeNaN();
    expect(multiply("1", 1)).toBeNaN();
    expect(multiply("1", "1")).toBeNaN();
  });
  it("returns 0 if either argument is 0", () => {
    expect(multiply(0, 1)).toBe(0);
    expect(multiply(1, 0)).toBe(0);
  });
  it("returns 2 for 1 * 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  it("returns 25 for -5 * -5", () => {
    expect(multiply(-5, -5)).toBe(25);
  });
  it("returns -24.5 for -4.9 * 5", () => {
    expect(multiply(-4.9, 5)).toBeCloseTo(-24.5);
  });
});

describe("vote", () => {
  it("returns a string", () => {
    expect(vote(1)).toBeTypeOf("string");
  });
  it("returns 'Age not valid.' if age is not a number", () => {
    expect(vote("1")).toBe("Age not valid.");
  });
  it("returns 'You must be 18 or older to vote.' if age is less than 18", () => {
    expect(vote(17)).toBe("You must be 18 or older to vote.");
  });
  it("returns 'Who would you like to vote for?' if age is 18 or older", () => {
    expect(vote(18)).toBe("Who would you like to vote for?");
  });
});

describe("concatenateStrings", () => {
  it("returns undefined if either argument is not a string", () => {
    expect(concatenateStrings(1, "1")).toBeUndefined();
    expect(concatenateStrings("1", 1)).toBeUndefined();
    expect(concatenateStrings(1, 1)).toBeUndefined();
  });
  it("returns 'ABBA' for 'AB' + 'BA'", () => {
    expect(concatenateStrings("AB", "BA")).toBe("ABBA");
  });
  it("returns ABC for '' + 'ABC' ", () => {
    expect(concatenateStrings("", "ABC")).toBe("ABC");
  });
  it("returns ABC for 'ABC' + '' ", () => {
    expect(concatenateStrings("ABC", "")).toBe("ABC");
  });
  it("returns '' for two empty strings", () => {
    expect(concatenateStrings("", "")).toBe("");
  });
});
