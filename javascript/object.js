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

const MyUser ={
    fullname: {
        userfullname: {
            u_name: "riya",
            u_lname:"sharma"
        }
    }
}
console.log(MyUser.fullname.userfullname.u_name)

const obj1 ={1:"a" , 2: "b"}
const obj2 ={3: "c" , 4: "d"}

const obj3 ={obj1 , obj2} // normal way , output- 2object inside 
console.log(obj3)

const obj4 = Object.assign(obj1,obj2) 
// efficient way- combine 2 obj Element all values go in obj1
// obj1==obj4
console.log(obj4)

const obj5 ={...obj1,...obj2} //spread operator
console.log(obj5) 

const ArrayOfobj=[
    {
        name:"bheem",
        email:"bheem.com"
    },
    {
        name:"pika",
        email:"pika.com"
    }
]
console.log(ArrayOfobj[1].name)

console.log(obj1);
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj2))
console.log(obj1.hasOwnProperty('1'))

const course={
    name:"C++",
    teacher:"S.C.D"
}
const {teacher:sir }=course
//console.log(teacher); at time only one run
console.log(sir)
