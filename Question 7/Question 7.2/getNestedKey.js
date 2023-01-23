//object defined heres
let obj={
    name:"Harry Potter",
    age: 12,
    address: {
    details: ["4", "Privet Drive"],
    area:"Little Whinging",
    city: "Surrey",
    state: "England"
    } 
  }


//getNestedUtils function

function getNestedKeyUtil(i,obj,keys)
{

     if(i==keys.length-1)
     {
   
         return obj[keys[i]]
     }
     

   
   return  getNestedKeyUtil(i+1,obj[keys[i]],keys)
}


function getNestedKey(obj,keys)
{
         let reqKeys=keys.split('.')
         

        return getNestedKeyUtil(0,obj,reqKeys)
}

console.log("required Value:",getNestedKey(obj, "address.details.0"))




