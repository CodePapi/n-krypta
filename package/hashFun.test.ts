import { hashFun } from "./hashFun";

describe("hashFun", () => {
  it("should return true", () => {
    expect(hashFun).toBeDefined();
  });
  it("should return 1100101", () => {
    expect(hashFun("a")).toBe(1100101);
  });
    it("should return 1100011010100000", () => {
        expect(hashFun("Secret*@+-1234")).toBe(1100011010100000);
    });
});
