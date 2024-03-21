//call,apply, bind

function getName(a, b, c) {
  console.log(a, b, c);
  console.log(this.name);
  console.log(this.age);
}

const person1 = {
  name: "Easa",
  age: 19,
};

getName.call(person1, "1", "2", "3");
getName.apply(person1, ["1", "2", "3"]);
const neww = getName.bind(person1, "1", "2", "3");
neww();

class Hai {
  constructor() {
    this.name = "Hello";
  }
  getName() {
    return this.name;
  }
}

const user = new Hai();
console.log(user.getName()); //Hello

//! this is a error
//const value = user.getName;
//console.log(value());// undefined

const value2 = user.getName.bind(user);
console.log(value2()); // Hello
