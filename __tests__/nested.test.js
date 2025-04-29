import { describe, it, expect } from "vitest";
import { makeBoard, makeTriangle, countLetter } from "../patterns/nested";

describe("makeBoard", () => {
  it("returns null if either argument is not a number", () => {
    expect(makeBoard("1", 1)).toBeNull();
    expect(makeBoard(1, "1")).toBeNull();
    expect(makeBoard("1", "1")).toBeNull();
  });
  it("returns [] if either argument is 0", () => {
    expect(makeBoard(0, 1)).toStrictEqual([]);
    expect(makeBoard(1, 0)).toStrictEqual([]);
  });
  it("returns [] if either argument is negative", () => {
    expect(makeBoard(1, -1)).toStrictEqual([]);
    expect(makeBoard(-1, 1)).toStrictEqual([]);
  });
  it("returns a 1x1 board", () => {
    expect(makeBoard(1, 1)).toStrictEqual([["-"]]);
  });
  it("returns a 1x3 board", () => {
    expect(makeBoard(1, 3)).toStrictEqual([["-", "-", "-"]]);
  });
  it("returns a 3x1 board", () => {
    // prettier-ignore
    expect(makeBoard(3, 1)).toStrictEqual([
      ["-"],
      ["-"],
      ["-"]
    ]);
  });
  it("returns a 3x3 board", () => {
    expect(makeBoard(3, 3)).toStrictEqual([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });
});

describe("makeTriangle", () => {
  it("returns null if rows is not a number", () => {
    expect(makeTriangle("1")).toBeNull();
  });
  it("returns [] if rows is 0", () => {
    expect(makeTriangle(0)).toStrictEqual([]);
  });
  it("returns [] if rows is negative", () => {
    expect(makeTriangle(-1)).toStrictEqual([]);
  });
  it("returns a 1x1 triangle", () => {
    expect(makeTriangle(1)).toStrictEqual([["-"]]);
  });
  it("returns a 2x2 triangle", () => {
    // prettier-ignore
    expect(makeTriangle(2)).toStrictEqual([
      ["-"],
      ["-", "-"]
    ]);
  });
  it("returns a 3x3 triangle", () => {
    // prettier-ignore
    expect(makeTriangle(3)).toStrictEqual([
      ["-"],
      ["-", "-"],
      ["-", "-", "-"]
    ]);
  });
});

describe("countLetter", () => {
  it("returns 0 if letter is not a string", () => {
    expect(countLetter(["word"], 1)).toBe(0);
  });
  it("returns 0 if words is an empty array", () => {
    expect(countLetter([], "a")).toBe(0);
  });
  it("returns 0 z in [abc, def]", () => {
    expect(countLetter(["abc", "def"], "z")).toBe(0);
  });
  it("returns 1 a in [abc, def, ghi]", () => {
    expect(countLetter(["abc", "def", "ghi"], "a")).toBe(1);
  });
  it("returns 3 a's in [aca, bcA, abc]", () => {
    expect(countLetter(["aca", "bcA", "abc"], "a")).toBe(3);
  });
});
