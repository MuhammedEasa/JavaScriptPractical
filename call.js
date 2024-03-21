function getName(){
    console.log(this.name);
    console.log(this.age);
}


const person1 ={
    name:"Easa",
    age:19
}

getName.call(person1)