let i=0;

console.log(i++);  //it first pass value of i  to log then incriment it  preincriment

console.log(++i); // it first incriment it then pass value to log.     postincriment

let name="sushant"

console.log(name.charAt(2));  // it will work properly

console.log(name.charAt(-1)==""); //it will give "" string

console.log(name.charAt(7)); // it will too return "" string


let arr=[
          {name:"sushant"},

          {name:"omkar"},

          {name:"prathmensh"}
        ]

let obj1= {
           name:"sushant"
          }

let obj2= {
              details:
             {
                 num:907567,

                 phone:6784,

                 email:"sushany"
             },

             name: "sushant"

          }

console.log(JSON.stringify(obj2));  //nested object

console.log(JSON.stringify(obj1));   // object

arr=JSON.stringify(arr);

console.log(JSON.stringify(123));

console.log(JSON.stringify("sushant")); // string

console.log(JSON.stringify(undefined)); // undefined

console.log(JSON.stringify(null)); // null

console.log(arr);

console.log(JSON.parse(arr))  //array of object

try
{
  console.log(JSON.parse(name));
}
catch(err)
{
    if(err)
     console.log("string can'tbe parsed stringified object is parsed");
}


