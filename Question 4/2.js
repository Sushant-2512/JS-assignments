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
   

test(callbackFunc)   //first call the test with callback function and then callback function is called from the function


test(callbackFunc())  //second returned value will be passed to the test function as 5 hence it throws an error by 5()


test(() => {return callbackFunc()})  //third is called successfully because callback function is passed  to the test