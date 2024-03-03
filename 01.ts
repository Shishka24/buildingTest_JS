// const sentence = "Hello My Friends!";

export function SplitWorlds(sentence: string) {
  const words = sentence.toLowerCase().split(" ");
  return words.filter((w) => w !== "").map((w) => w.replace("!", ""));
}

export function sum(a: number, b: number) {
  return a + b;
}
export function mult(a: number, b: number) {
  return a * b;
}
