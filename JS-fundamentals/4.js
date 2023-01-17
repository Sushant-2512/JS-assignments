let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]
    let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    "phone":"90768960"
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]
   

    //merge the props. of two objects with same IDs

    function mergeById(userNames,userEmails) 
   {
         let map=new Map();

         for(let i in userEmails)
         {
               
             map[userEmails[i]["id"]]=userEmails[i];
         }

         for(let i in userNames)
         {
               
                Object.entries(map[userNames[i].id]).forEach((props)=>{
                      
                       userNames[i][props[0]]=props[1];
                })
         }

         return userNames;
   }


    console.log(mergeById(userNames, userEmails))

    
