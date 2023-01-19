let arr=["sushant","sushant","patil","patil"]

// filter function remove duplicates from the array

function filter(arr)
{
       let s=new Set();

       for(let i in arr)
       {
         s.add(arr[i]);
       }
      let arr1=[];

      s.forEach((ele)=>
      {
           arr1.push(ele)
      })
      return arr1;
}

console.log(filter(arr));

