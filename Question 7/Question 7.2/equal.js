//Equal function

function equal(obj1,obj2)
{
    let flg=true

    if(Array.isArray(obj1) || Array.isArray(obj2))
    {
           for(let i in obj1)
           {
              if(typeof(obj1[i])=='object' || typeof(obj2[i])=='object')
              {
               
                 flg=flg && equal(obj1[i],obj2[i])
              }    
             else
               flg=flg && obj1[i]===obj2[i]

           }
           return flg;
    }
    const keys=Object.keys(obj1);

    for(let i in keys)
    {
        
         if(typeof(obj1[keys[i]])=='object' || typeof(obj2[keys[i]])=='object')
         {
         
           flg=flg && equal(obj1[keys[i]],obj2[keys[i]])
         }    
         else
         flg=flg && obj1[keys[i]]===obj2[keys[i]]  
           
    }

    return flg
}


console.log(equal({name:"sushant",lname:"patil",details:[{phone:90775,email:"patil"}]},{name:"sushant",lname:"patil",details:[{phone:9075,email:"patil"}]}))

console.log(equal([{name:"sushant",lname:"patil",details:[{phone:9075,email:"patil"}]}],[{name:"sushant",lname:"patil",details:[{phone:9075,email:"patil"}]}]))

