import { sum, mult, SplitWorlds } from "./01";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});
test("sum should be correct", () => {
  //action
  const result1 = sum(a, b);
  a = 100;
  const result2 = sum(a, c);
  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(103);
});

test("Multiple should be correct", () => {
  const a = 1;
  const b = 2;
  const c = 3;
  //action
  const result1 = mult(a, b);
  const result2 = mult(a, c);
  //expect result
  expect(result1).toBe(2);
  expect(result2).toBe(3);
});

test("split into words should be correct", () => {
  const sent1 = "Hello my friends";
  const sent2 = "JS programming language of coding";

  //action
  const result1 = SplitWorlds(sent1);
  const result2 = SplitWorlds(sent2);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("hello");
  expect(result1[1]).toBe("my");
  expect(result1[2]).toBe("friends");

  expect(result2.length).toBe(5);
  expect(result2[0]).toBe("js");
  expect(result2[1]).toBe("programming");
  expect(result2[2]).toBe("language");
  expect(result2[3]).toBe("of");
  expect(result2[4]).toBe("coding");
});
