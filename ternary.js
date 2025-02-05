// similar as if condition but simple and easy
// syntax
// condition ? " true output " : "False output" ;

// checking the age to vote
let age = 16 ;
let res = age >= 18 ? "You can vote " : "You cannot Vote ";
console.log(res);

// checking even odd
{
    let num = 10 ;
    let res =  num % 2 == 0 ? "It is Even Number " : "It is Odd Number "
    console.log(res);
}


// transaction
let balance = 5000 ;
let withdrawal =2000 ;
let final = balance >= withdrawal ?  "You have sufficient balance" : " You dont have sufficient balance";
console.log(final) 