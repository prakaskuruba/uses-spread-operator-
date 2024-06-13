//spread operator with Array

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1,...arr2];
console.log(arr3);

//spread operator with Objects

let person ={name:"prakash", age:"24"};
let address={pincode:515621, city:"bangalore"};
let personDetailes = {...person, ...address};
console.log(personDetailes);

//spread opetator with functioncal 

function add(a,b,c){
    return a+b*c;
}
let arry = [7,4,6];
console.log(add(...arry));