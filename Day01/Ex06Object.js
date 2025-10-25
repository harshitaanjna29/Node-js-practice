// ways to create an object in nodejs
// singleton objects

const emp={
    id:123,
    name:"Harshit",
    address:"Bangalore"
}
const emp2 =emp;
emp2.address= "E-City Bangalore"
console.log(emp)

// using function type

const emp3 = function(id, name,address){
    this.empId =id;
    this.empName =name;
    this.empAddress =address;
}
const obj1= new emp3(123,"Yash","Gurgaon")
const obj2= new emp3(124,"Nikhil","Indore")
obj2.empAddress="Kesunda"
console.log(obj2)

// using E56 syntax

class customer {
    constructor(id, name,address){
        this.id=id;
        this.name=name;
        this.address=address;
    }

}
const temp =new customer(123,"rohit","jaipur")
console.log(temp)