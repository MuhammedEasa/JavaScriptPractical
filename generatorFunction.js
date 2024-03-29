function* generator() {
  yield "Hello";
  yield "World";
}

const generate = generator();

console.log(generate.next());
console.log(generate.next());

// real example
function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
