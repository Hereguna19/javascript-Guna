let a = [firstname, lastname];
let b = ["Yash", "Goyal"]


function CreateObject(a, b){
if(a.length != b.length || a.length == 0 || b.length == 0){
return null;
}
let obj = {};
    

a.forEach((k, i) => {obj[k] = b[i]})
return obj;
}