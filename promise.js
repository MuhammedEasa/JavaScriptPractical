const condition = true
//const condition = false
const promise = new Promise((resolve,reject)=>{
    if(condition){
    const success = "SUCCESS"
    setTimeout(() => {
        return resolve(success)
    }, 2000);
}else{
    const failed = "FAILED"
    setTimeout(() => {
        return  reject(failed)
    }, 2000);

}
})

promise.then((response)=>{
    console.log(response);
})
.catch((e)=>console.log(e))


// promise methods

// all

// If any promise within the chain fails, the entire chain will be rejected.
const promise1 = new Promise((resolve,reject)=>{
    resolve(["Hello","World"])
  //  reject("promise 1 rejected")
})
const promise2 = new Promise((resolve,reject)=>{
   resolve(["Hai","World2"])
   // reject("promise 2 rejected")
})

const all = Promise.all([promise1,promise2])
all.then((x)=>console.log(x))
.catch((e)=>console.log(e))


// allsettled  
const promise3 = new Promise((resolve,reject)=>{
    resolve(["Hello","World3"])
})
const promise4 = new Promise((resolve,reject)=>{
   resolve(["Hai","World4"])
   // reject("promise 2 rejected")
})

const allSettled = Promise.allSettled([promise3,promise4])
all.then((x)=>console.log(x))
.catch((e)=>console.log(e))


// any 
// It returns a single resolved promise if at least one of the promises in an iterable is fulfilled.
Promise.any([promise1,promise2]).then((result) => {
  console.log('The first promise to resolve was:', result);
});

// race
// gives the first promise
Promise.race([promise1,promise2]).then((result) => {
    console.log('The first promise  was:', result);
  });