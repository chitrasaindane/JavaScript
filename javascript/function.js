
function MyName(){
    console.log("CHITRA")
}
MyName()

function addition(a,b){
    console.log(a+b)
}
addition(2,null)
addition(3,"a")
addition(3,5)
addition(7,undefined)

function login(username){
    return `${username} just logged in `
}
console.log(login("chitra"))
console.log(login())
console.log(login(" "))

function calculateCartPrice(val1 , ...num1){
 return num1
}
console.log(calculateCartPrice(200,890,100))

// object in function

const user ={
    name:"diya",
    price: 200
}
function handleobject(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`)
}
handleobject(user)

// array in function

const array=[100,200,300]

function arrayvalue(array){
   
    return array[2]

}
console.log(arrayvalue(array))

const numval = function value(num1){

    return num1
}
console.log(numval(10))

/*------------------------------Arrow FUnction---------------------------------------*/

const add = (n1,n2) => {
    return(n1+n2) // (explicitly return) arrow func with {} return key is must 
}
console.log(add(7,8))

const sub =(n1,n2)=> n1-n2 //(implicit return) no need to used return keyword 
console.log(sub(10,5))

const objReturn =(n1) => ({name:"siya"}) //**  to return obj - writin e the obj paranthesis 
console.log(objReturn());


/*-----------Immediately invoked function Exxpressions (IIFE)--------------------------*/
/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 It is a common pattern used to avoid polluting the global scope and to create a local scope for variables. */


(function connect(){      // Name IIFE
    console.log(`DB connect`);
})();

(() => {  //unamed IIFE
    console.log(`DB connect`);
})();

((name) => {
    console.log(`name is ${name}`);
})('diya');

