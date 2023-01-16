getAns();
console.log(a);
try
{
   getAns1();

} catch(err)
{
     if(err)
        console.log("it is undefined");   
}
var a;
function getAns()
{
     console.log("Answer found!");
}

var getAns1=() => {
     console.log("Answer found!");
}