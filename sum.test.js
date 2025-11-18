import sum from "./sum.js";
describe("test for sum fnx", () => {
  test("adds 2+2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("",()=>{
    expect(sum(-3,-2)).toBe(-5);
  })
  test("",()=>{
    expect(sum(-3,2)).toBe(-5);
  })
});
