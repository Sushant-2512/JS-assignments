   let user = {
		name: "sushant",
		m1:() => {
			console.log("hello " + this.name); // no 'this' binding here
		},
		m2(){
			console.log("Welcome to " + this.name); // 'this' binding works here
		}
	};
	user.m1();
	user.m2();


    let user1={
          show1(num)
          {
             console.log(arguments);
          },
          show2:(num)=>{
              console.log(arguments);
          }
          
    }

    user1.show1(4);
    try
    {
      user1.show2(4);
    } catch(err)
    {
         if(err)
            console.log("Arrow  don't have the arguments");
    }
