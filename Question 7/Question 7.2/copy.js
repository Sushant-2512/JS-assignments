
const obj={name:"sysgab",arr:[1,2,3,4],details:{

    lname:"sushant",
    go:{
           st:"dsjdjs",
           fnma:"sosk"
    }
}}

// copy function

function copy(obj1)
{
 
    let obj2;
    if(Array.isArray(obj1))
    {
           obj2=[];

           for(let i in obj1)
           {
              if(typeof(obj1[i])=='object')
              {
               
                 obj2.push(copy(obj1[i]))
              }    
             else
                obj2.push(obj1[i])

           }
           return obj2;
    }

    obj2={}
    const keys=Object.keys(obj1);

    for(let i in keys)
    {
        
         if(typeof(obj1[keys[i]])=='object')
         {
         
           obj2[keys[i]]=copy(obj1[keys[i]])
         }    
         else
         obj2[keys[i]]=obj1[keys[i]] 
           
    }

    return obj2;
}

console.log([{name:"sushant",lname:"patil",details:[{phone:9075,email:"patil"}]}]);

console.log(copy([{name:"sushant",lname:"patil",details:[{phone:9075,email:"patil"}]}]));




