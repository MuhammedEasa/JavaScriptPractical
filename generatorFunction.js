function* generator(){
yield "Hello";
yield "World1";
return 'Generator finished';
}

console.log(generator().next());
console.log(generator().next());

// function* generator() {
//   yield "Hello";
//   yield "World";
// }

// const generate = generator();

// console.log(generate.next());
// console.log(generate.next());
