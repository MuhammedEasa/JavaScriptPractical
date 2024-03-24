const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Promise is resolved")
    },1000)
})

// normal function
// async function fetchData (){
//  const result = await promise;
//  console.log(result);
// }

// arrow function
const fetchData = async ()=>{
    const result = await  promise;
    console.log(result);
}
fetchData()