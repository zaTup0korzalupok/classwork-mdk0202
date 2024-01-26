// let arr=[{ age:30,name:"♂️ Billy ♂️",subname:"♂️ Herrington ♂️",zxc1:[1,2,3]},
// { age:27,name:"♂️ john ♂️", subname:"♂️ doe♂️",zxc1:[1,2,3]},
// { age:32,name:"♂️ van♂️", subname:"♂️ dark ♂️",zxc1:[1,2,3]}
// ]//omg function 
// function filter(targetArr,targetAge){

//     return targetArr.filter(person=>person.age >=targetAge)

// }
// let zxc = filter(arr,27)
// console.log(zxc)
let arr=[{ age:30,name:"♂️ Billy ♂️",subname:"♂️ Herrington ♂️",group:"1"},
{ age:27,name:"♂️ john ♂️", subname:"♂️ doe ♂️",group:"1"},
{ age:32,name:"♂️ van ♂️", subname:"♂️ dark ♂️",group:"4"},
{ age:30,name:"♂️ Billy ♂️",subname:"♂️ Herrington ♂️",group:"4"},
{ age:27,name:"♂️ john ♂️", subname:"♂️ doe ♂️",group:"3"},
{ age:32,name:"♂️ van ♂️", subname:"♂️ dark ♂️",group:"1"},
{ age:32,name:"♂️ Billy ♂️",subname:"♂️ Herrington ♂️",group:"2"},
{ age:27,name:"♂️ john ♂️", subname:"♂️ doe ♂️",group:"3"},
{ age:32,name:"♂️ van ♂️", subname:"♂️ dark ♂️",group:"2"},
{ age:32,name:"♂️ john ♂️", subname:"♂️ doe ♂️",group:"3"}
]//omg function 
function filter(targetArr,group){

    return targetArr.filter(person=>person.group ==group)

}
let zxc = filter(arr,3)
console.log(zxc)
console.log(zxc.name)
