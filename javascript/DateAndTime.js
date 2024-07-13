let myDate = new Date()
console.log(myDate)

console.log("toString :")
console.log(myDate.toString())

console.log("toDateString : ")
console.log(myDate.toDateString())

console.log("toLocaleString :")
console.log(myDate.toLocaleString())

console.log("toISOString :")
console.log(myDate.toISOString())

console.log("toJSON : ")
console.log(myDate.toJSON())

console.log("toLocaleDateString :")
console.log(myDate.toLocaleDateString())

console.log("toLocaleTimeString :")
console.log(myDate.toLocaleTimeString())

console.log("toTimeString")
console.log(myDate.toTimeString())

console.log("toUTCString")
console.log(myDate.toUTCString())

console.log("gtetime")
console.log(myDate.getFullYear())


let mycreateDate = new Date(2023 , 0 ,23)
console.log(mycreateDate)

let createDate2 = new Date("1-3-2023")
console.log(createDate2)

const date3= myDate.toLocaleString('default' , {
    weekday: "long",
    
})
console.log(date3)