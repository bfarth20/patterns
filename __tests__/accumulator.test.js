import { describe, it, expect } from "vitest";
import {
  sumToN,
  factorial,
  buildNArray,
  getLongestString,
  countPresent,
  complementDNA,
} from "../patterns/accumulator";

describe("sumToN", () => {
  it("returns NaN if argument is not a number", () => {
    expect(sumToN("1")).toBeNaN();
  });
  it("returns 0 for -5", () => {
    expect(sumToN(-5)).toBe(0);
  });
  it("returns 0 for 0", () => {
    expect(sumToN(0)).toBe(0);
  });
  it("returns 1 for 1", () => {
    expect(sumToN(1)).toBe(1);
  });
  it("returns 3 for 2", () => {
    expect(sumToN(2)).toBe(3);
  });
  it("returns 15 for 5", () => {
    expect(sumToN(5)).toBe(15);
  });
});

describe("factorial", () => {
  it("returns NaN if argument is not a number", () => {
    expect(factorial("1")).toBeNaN();
  });
  it("returns undefined for -5", () => {
    expect(factorial(-5)).toBeUndefined();
  });
  it("returns 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("returns 1 for 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("returns 2 for 2", () => {
    expect(factorial(2)).toBe(2);
  });
  it("returns 6 for 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("returns 120 for 5", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("buildNArray", () => {
  it("returns null if argument is not a number", () => {
    expect(buildNArray("1")).toBeNull();
  });
  it("returns [] for -5", () => {
    expect(buildNArray(-5)).toEqual([]);
  });
  it("returns [] for 0", () => {
    expect(buildNArray(0)).toEqual([]);
  });
  it("returns [1] for 1", () => {
    expect(buildNArray(1)).toEqual([1]);
  });
  it("returns [1,2,3,4,5] for 5", () => {
    expect(buildNArray(5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getLongestString", () => {
  it("returns '' for an empty array", () => {
    expect(getLongestString([])).toBe("");
  });
  it("returns 'a' for ['a']", () => {
    expect(getLongestString(["a"])).toBe("a");
  });
  it("returns 'abc' for ['a', 'abc']", () => {
    expect(getLongestString(["a", "abc"])).toBe("abc");
  });
  it("returns 'abc' for ['abc', 'a']", () => {
    expect(getLongestString(["abc", "a"])).toBe("abc");
  });
  it("returns 'abc' for ['abc', 'abc']", () => {
    expect(getLongestString(["abc", "abc"])).toBe("abc");
  });
  it("returns 'abc' for ['a', 'abc', 'ab']", () => {
    expect(getLongestString(["a", "abc", "ab"])).toBe("abc");
  });
});

describe("countPresent", () => {
  it("returns 0 for an empty array", () => {
    expect(countPresent([])).toBe(0);
  });
  it("returns 0 for [false]", () => {
    expect(countPresent([false])).toBe(0);
  });
  it("returns 1 for [true]", () => {
    expect(countPresent([true])).toBe(1);
  });
  it("returns 2 for [true, false, true]", () => {
    expect(countPresent([true, false, true])).toBe(2);
  });
});

describe("complementDNA", () => {
  it("returns null if argument is not a string", () => {
    expect(complementDNA(1)).toBeNull();
  });
  it("returns '' for ''", () => {
    expect(complementDNA("")).toBe("");
  });
  it("returns 'T' for 'A'", () => {
    expect(complementDNA("A")).toBe("T");
  });
  it("returns 'G' for 'C'", () => {
    expect(complementDNA("C")).toBe("G");
  });
  it("returns 'C' for 'G'", () => {
    expect(complementDNA("G")).toBe("C");
  });
  it("returns 'A' for 'T'", () => {
    expect(complementDNA("T")).toBe("A");
  });
  it("returns 'ATCG' for 'TAGC'", () => {
    expect(complementDNA("TAGC")).toBe("ATCG");
  });
});
