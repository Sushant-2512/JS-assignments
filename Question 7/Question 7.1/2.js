let obj = {
    a:'Apple',
    b:['Basketball','Baseball'],
    c: {
     call: 'cellphone'
    },
    d: 'Dog'
   }

   
   function filterObject1()
   {
         const keys=Object.keys(obj);
         let obj2={};
         keys.forEach((key)=>
         {

              if(typeof(obj[key])!=typeof({}))
              {
                 
                obj2[key]=obj[key];
              }
                
         })

         return obj2;

   }

   function filterObject2()
   {
      const keys=Object.keys(obj);
      //I used reduce here
      return  keys.reduce((acc,key) => {
            
              if(typeof(obj[key])!=typeof({}))
              {
           
                acc[key]=obj[key];
             }

             return acc;

       },{})


   }

   // by using Object.keys
   console.log(filterObject1())
  
   console.log(filterObject2())

   


