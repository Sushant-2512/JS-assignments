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

 //  group according to the key 

    function groupBy(users,key)
    {

             let map=new Map();  //used map to group the objects according the key
               
            for(let i=0;i<users.length;i++)
            {
                   
                    if(!map[users[i][key]])
                     map[users[i][key]]=[]

                    map[users[i][key]].push(users[i]);
               

                 
            }

            let obj={};
            //add properties to the object
            for(let i in map)
            {
                obj[i]=map[i];
            }

            return obj;
    }

    console.log(groupBy(users, "gender"));

    

