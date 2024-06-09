const account_Id = 152634
let account_Email = "shivank@google.com"
var account_Password = "12345"
account_City = "jaipur"
let account_State

// account_Id = 346251    Not Allowded

account_Email = "ss@ss.com"
account_Password = "485967"
account_City = "Hyderabad"

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([account_Id, account_Email, account_Password, account_City, account_State])