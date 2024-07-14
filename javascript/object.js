//Object
const mysym = Symbol("key1")
const User ={
    "full name" : "Shinchan shinde",
    [mysym] : "mkey1", // symbol declaare in object
    age:5,
    location: "pune",
    email:"shinchan@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
} 
console.log(User.email) 
console.log(User["email"])
console.log(User["full name"])
console.log(User[mysym])

// Object.freeze(User) // freeze : object immutable, meaning you cannot add, remove, or modify its properties.

User.greeting = function(){
    console.log(`Good Morning ${this["full name"]} ` )
}
console.log(User.greeting())

// type1 obj --->  const user={}
//type2 obj --->   const user = new Object() singleton obj