
                                // global scope vs local scope
let a = "something"
var c = 300

if(true){
let a = 10
//const b = 20
var c = 30
console.log("INdex : ",a)
}

console.log(a)
//console.log(b)
console.log(c)

// {} => scope