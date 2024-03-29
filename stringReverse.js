let a = "HELLOWORLD";
// using inbuildMethods
let reversed = a.split("").reverse().join("");
console.log(reversed);
// Normal Way
function reverse(a) {
  let reversedStr = "";
  for (let i = a.length - 1; i >= 0; i--) {
    reversedStr += a[i];
  }
  return reversedStr;
}
console.log(reverse(a));
