let arr=[
    {name:"sushant", age:18},
    {name:"rohan", age:17},
    {name:"rohit", age:15},
    {name:"rahul", age:10},
    {name:"saurabh", age:5},
    {name:"pratik", age:18}
]


let arr1=[1,2,3,4,5]
let res1=arr1.reduce((acc,ele)=>{

     return acc*ele;
})

console.log(res1);

let res2=arr1.reduce((acc,ele)=>{
     
    return acc+ele;
})

console.log("average of ages",res2);