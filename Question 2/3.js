let arr1=["1","2","3"]
let obj1={name:"sushant" , sname:"patil"}
console.log(obj1);
obj1.name="Sushant"
console.log(arr1);
arr1[0]="3"
console.log(obj1)
console.log(arr1)
arr1.splice(0,1)
console.log(arr1)


const arr2=["1","2"]
console.log(arr2)
arr2[0]="3"
console.log(arr2)
const arr3=["4","5"];
arr2.splice(0,1)
console.log(arr2);
try
{
arr2=arr3;
}catch(err)
{
     if(err)
        console.log("const array can't assign new array");
}

const obj2={name:"sushant",sname:"patil"}
obj2.name="Sushant"
console.log(obj2);

const obj3={name:"susnant"}

try
{
     obj2=obj3
}
catch(err)
{
     if(err)
       console.log("constant object can't assign a object when it initilized");
}

