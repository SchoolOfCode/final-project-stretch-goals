const data = {
firstName: "mark",
subject: "Math"
}

let names = {}
let attValues = {}
let updateExpression ="SET"
const objValues = Object.values(data)
Object.keys(data).map((x,i)=>{
names = {...names, ["#" + x]: x}
 attValues = {...attValues, [":"+x]: objValues[i]}
 updateExpression = updateExpression + " " + ["#" + [x]] + " = " + [":"+[x]] + ","
})

console.log(updateExpression)
console.log(names)
console.log(attValues)