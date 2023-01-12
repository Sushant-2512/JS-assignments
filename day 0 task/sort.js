let arr=[
                   {name:"sushant", age:18},
                   {name:"rohan", age:17},
                   {name:"rohit", age:15},
                   {name:"rahul", age:10},
                   {name:"saurabh", age:5},
                   {name:"pratik", age:18}
        ]

console.log(arr);
arr.sort((ele1,ele2)=>{
    
   
  
      //console.log(ele1,ele2);
      return (ele1.age < ele2.age)?-1:1;
})
console.log(arr);