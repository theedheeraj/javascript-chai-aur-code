const accountId  = 2210991503
let accountEmail ="theedheeraj@gmail.com"
var accountPassword = "9708355960"
accountCity = "Samastipur"
let accountState; // in output it shows undefined

// accountId = 2 // not Allowed

accountEmail = "theedheeraj2@gmail.com"
accountPassword = "9135641787"
accountCity = "Delhi"

console.log(accountId);

console.log(accountEmail);

console.log(accountPassword);

console.log(accountCity);

//print by new method

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
Prefer not to use var
beacuase of issue in block scope and functional scope
*/