const marks =800;
console.log(marks)

const result = new Number(900.875)
console.log(result)

console.log(result.toString().length)

console.log(result.toFixed(3))

console.log(result.toPrecision(3))

const hundereds = 10000000000
console.log(hundereds.toLocaleString('en-In'))


//********************* Maths *********************** */

 console.log(Math.abs(-6))
 
 console.log(Math.round(88.6))
 
 console.log(Math.ceil(6.3))
 
 console.log(Math.floor(8.9))
 
 console.log(Math.min(9,89,64,32,))
 
 console.log(Math.max(1,6,8,905,43))
 
 console.log(Math.random()) // value 0-1
 
 console.log((Math.random()*10)+1) 
 
 const min = 10
 const max = 20

 console.log(Math.floor(Math.random()* (max-min+1)) +min)
