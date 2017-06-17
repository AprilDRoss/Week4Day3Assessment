// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


fetch("https://randomuser.me/api/?results=15")
 .then(function (response){
   response.json()
   .then(function(data){

     let users = data.results;
     console.log(users);

     for (i = 0; i < users.length; i++)
     obj = users[i].email;



 })
});
