const a =[1,2,4,6,7,8]
// for of 
for(const i of a){
    console.log(i)
}

const s ="Hello"
for(const i of s){
    console.log(i)
}


// for of on map

const map = new Map()
map.set('IN','India')
map.set('Fr',"France")

for(const key of map){
    console.log(key);
}
 
for(const [key] of map){ // only key
    console.log(key);
}

for(const [key, value] of map){
    console.log(key ,':-', value);
}


// for in loop
// for in on Obj

const obj={
    1:"hi",
    2:"hello",
    3:"hiiiiiiiiii"
}

for(const i  in obj){
    console.log(obj[i])
}

/*when for of loop apply on array - it gives values
 when for in loop apply on array - it gives key (0,1,2,3,4)
*/
 const lang=["js","c","c++","py"]
 for(const i in lang)
 {
    console.log(i) // give key of array(0,1,2,3,4)
 }

 for(const i in lang){
    console.log(lang[i]) // it gives value in array
 }

 // for in loop on map
 const language= new Map()
 language.set("c","C lang")
 language.set("js","javascript")
 language.set("py","python")

 for(const [i] in language){
    console.log(i) // no output is show (no error) , beacuse map is not iterative
 }


// forEach on array , array element as parameter in function
const Array =["siya","diya","riya"]

 Array.forEach(element => {
    console.log(element)
}); 

Array.forEach( function(i){
    console.log(i);
});

function greet(name){
    console.log("name is",name)
}

Array.forEach(greet);

Array.forEach((i, index, arr)=>{
    console.log(i,index,arr)

})


//  obj in array forEach loop

code =[
    {
        langName:"javascript",
        langfile:"js"
    },
    {
        langName:"python",
        langfile:"py"
    },
    {
        langName:"C++",
        langfile:"cpp"
    }
]

code.forEach((item)=>{
    console.log("langName:-",item.langName,"=> langfile:-",item.langfile)
    
})