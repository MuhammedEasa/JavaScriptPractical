
//shallow Copy Affect Parent
const hai = [1,2,3,4,5]
const hello = hai;
hello[0] = 10
console.log(hai);
console.log(hello);


// Deep Copy doesn't affects  Arrays

const thirdArray = [1,2,3,4,5]
const FourthArray = JSON.parse(JSON.stringify(thirdArray))
thirdArray[0]=9
console.log('Deep First',thirdArray)
console.log('Deep Second',FourthArray)


const firstArray = [1,2,3,4,5];
const secondArray = [...firstArray]
secondArray[0]=6;
console.log(firstArray);
console.log(secondArray);

