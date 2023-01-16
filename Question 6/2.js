let arr=[1,2,3,4,5,6];

console.log(arr);

console.log(arr.push(8));  //it return index at which the value is added not the array

console.log(arr);   //array is changed so the push muated the arraty

console.log(arr.pop());  //it return the popped number not the array

console.log(arr);  //array changed last ele. was deleted hence it muted the array


console.log( arr.filter((ele)=>
{
     
    if(ele%2)
      return true;

      return false;
}) );

//it return the array so this method is immuatable


console.log(arr.sort((ele1,ele2)=>{

    return ele1<ele2?1:-1; 
}));

//it return the array so this method also immutable