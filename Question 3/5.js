function check()
{

    for(let i=0;i<25;i++)
  {
      if(i==15)
       return i;
    
  }

}

console.log(check());

//.  No , If that loop is not in the function we can't use return but if that loop is in the function then we use the return which stops the execution at that position and start from where the function 
//is called.