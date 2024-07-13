const name = "Ramesh" // declaration string 1method
const count = 90

//1st method 
console.log(name + 90 + "Hello")

//2nd method
console.log(`name is ${name} and count is ${count}`);

// String declaration 2method

const fruit = new String("Apple")

console.log(fruit[0])
console.log(fruit.__proto__)

console.log(fruit.length)

console.log(fruit.toUpperCase())

console.log(fruit.charAt('4'))

console.log(fruit.indexOf('e'))

const newstring = fruit.substring(0,3)
console.log(newstring)

const stringf = fruit.slice(0,2)
console.log(stringf)



const newname = "     Siya       "
console.log(newname)

console.log(newname.trim()) // trim remove whitespace

console.log(newname.trimStart()) // trim remove whitespace only from starting

console.log(newname.trimEnd()) // trim remove whitespace only at end



const url = "https://google.com"

console.log(url.replace('google' , 'yahoo'))

console.log(url.includes('siya'))

console.log(url.split('.'))