let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender": "Male",
}, 
{
    "id": 2,
    "first_name" :  "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender" : "Female"
}, 
{
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender":"Male"
},
 {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender":"Female"
}];

//sort function according to the aesc or desc and key 

function sort(users,key,type)
{
       if(type=="desc")
       {
          return users.sort((user1,user2) => {
               
               return  user1[key]< user2[key] ? 1 : -1;
          });
       }
       
         if(type=="aesc")
       {
            return users.sort((user1,user2) => {
                
                return  user1[key]< user2[key] ? -1 : 1;
            });
       }
    
}


console.log(sort(users, "id", "desc"))

console.log(sort(users, "first_name", "aesc"))

