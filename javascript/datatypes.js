// Primitive
// types (7)  : String , NUmber , Boolean ,  null , undefined , symbol , Bigint
console.log("Type of -  num= 100.7 ")
const num= 100.7
console.log(typeof(num))

console.log("type of - temp = null")
const temp = null
console.log(typeof(temp))

console.log("type of - let email")
let email;
console.log(email)

console.log("symbol data type example")
let id = Symbol('12345')
let anotherID = Symbol('12345')

console.log(id === anotherID);

console.log("tyepe of - number=23897348578n")
let number=23897348578n
console.log(typeof number)


// Reference (Non Primitive)
// types - Array , Object , Function

console.log("Non Primitive")

console.log("Type of array ")
const heros = ["ram " ,"Sham" ,'prem']
console.log(typeof heros)

console.log("type of Object")
let myobj={
    name :"Cookie",
    age: 98
}
console.log(typeof myobj)

console.log("type of function")
let fun = function(){
    console.log(2+2)
}
console.log(typeof fun)













