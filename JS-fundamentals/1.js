 let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}];


// it is a mapBy function 
function mapBy(users,key)
{
       //reduce function 
      return users.reduce((obj,user)=>{
                
               
                obj[user[key]]=user;
                return obj;
      },{})
}

console.log(mapBy(users, 'first_name'));

console.log(mapBy(users, 'id'));

