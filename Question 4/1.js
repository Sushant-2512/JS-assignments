//yes , it returns what ever value you want but the lines or the loop after that will not be executed

function fun1()
{
    for(let i=0;i<5;i++)
    {
        if(i==4)
         return 4;
    }
}

function fun2()
{
    let flg=true;
    switch(flg)
    {
        case true:
                return true;

        case false:
                return true;
             
    }
}


function fun3()
{
    let flg=true;
    if(flg)
      return true;
    else
      return false;
}


console.log(fun1());

console.log(fun2());

console.log(fun3());


