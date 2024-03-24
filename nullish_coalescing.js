// This Problem Solves

// const myObj = {
//     id:0,
//     name:"Easa"
// }
// const newObj  = myObj.id || 1;
// console.log(newObj);
// answer is 1

// with nullish coalescing
const myObj = {
  id: 0,
  name: "Easa",
};
const newObj = myObj.id ?? 1;
console.log(newObj);
//answer is 0
