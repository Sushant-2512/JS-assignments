const arr=
[{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31"
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23"
}, {
"id": 5,
"first_name": "Venita",
"email": "vheap4@clickbank.net",
"date_of_birth": "2020/10/04"
}, {
"id": 6,
"first_name": "Fairfax",
"email": "fcrichton5@merriam-webster.com",
"date_of_birth": "2009/12/23"
}, {
"id": 7,
"first_name": "Kathleen",
"email": "kvasyukhnov6@devhub.com",
"date_of_birth": "2010/12/20"
}, {
"id": 8,
"first_name": "Sam",
"email": "scorck7@sitemeter.com",
"date_of_birth": "2020/08/30"
}, {
"id": 9,
"first_name": "Virgilio",
"email": "vferandez8@e-recht24.de",
"date_of_birth": "2000/09/07"
}, {
"id": 10,
"first_name": "Townie",
"email": "tpetyt9@upenn.edu",
"date_of_birth": "2018/09/01"
}]




function filterByName(f_name)
{
    return arr.filter((ele) =>      // method which filter the data according to its first_name
    {
    
         if(ele.first_name==f_name)
          return true;

    })
}


// map function

function mapUtil()
{
   return  arr.map(  (ele) =>
                    { 
                        return ele.email
                    });
}

//sort function 
function sortUtil()
{
    return arr.sort( (ele1,ele2)=> 
                     { 
                        return ele1.date_of_birth < ele2.date_of_birth ?1:-1;
                     });
}


function getById(id)
{
      for(let i=0;i<arr.length;i++)
      {
        if(arr[i].id==id)
          return arr[i];
      }

      return null;
}

console.log("Deatils of Townie:",filterByName("Townie"));

console.log("Deatils of Virgilio:",filterByName("Virgilio"));



console.log("Emails:",mapUtil());   // email is returned 

console.log("sorted Array",sortUtil());   // sort the object according the date of birth

console.log("ID 6: ",getById(6));  //get element of particular ID



