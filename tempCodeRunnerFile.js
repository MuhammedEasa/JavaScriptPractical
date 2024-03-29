function* generator() {
  yield "Hello";
  yield "World";
}

const generate = generator();

console.log(generate.next());
console.log(generate.next());