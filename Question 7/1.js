let obj1={
  
    name: 'Harry Potter',
  age: 12,
  address: {

        details: ['4', 'Privet Drive'],
        area:'Little Whinging',
        city: 'Surrey',
        state: 'England'

        } 

}

// Deep copy 
let obj2=JSON.parse(JSON.stringify(obj1));

let obj3=Object.assign({},obj1);

obj3.address=Object.assign({},obj1.address);

obj3.address.details=Object.assign([],obj1.address.details);


obj2["address"]["details"][0]='5';

obj3["address"]["details"][0]='5';

console.log(obj1);

console.log(obj2);