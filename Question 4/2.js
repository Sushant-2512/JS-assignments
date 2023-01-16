function test(callback){
       
       try
      {
         callback();
      }
       catch(err)
      {
             console.log("callback is not a function");
      }

   }
   
  
 function callbackFunc() {

    console.log('Calling the callback function');
    return 5;
   }
   

test(callbackFunc)


test(callbackFunc())

test(() => {return callbackFunc()})