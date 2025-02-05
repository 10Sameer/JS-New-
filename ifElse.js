// if else is used to compare and check basic condiions

// syntax
    //  if (condition == true){
    //     console.log("True")
    //  } else{
    //     console.log("False")
    //  }


// 1 Write a JavaScript if statement to check if a number is positive.
// 2 Write an if-else statement to check if a given number is even or odd.
// 3 Write a program that checks if a user is old enough to vote (age 18 or above).
// 4 Use an if-else statement to check if a number is exactly divisible by 5.
// 5 Write a script that checks if a variable x is greater than 100 and prints "High" if true, otherwise prints "Low".

// 2
let a = 4;
if (a % 2 == 0) {
    console.log("It is even number");
}else{
    console.log("It is odd Number");
}


// 3
let age = 18 ;
if (age >= 18){
    console.log("you can Vote");
}else{
    console.log("You cannot vote.You are Young");
}

// 4
let num = 20;
if (num % 5 == 0){
    console.log("The number is exactly divisible by 5, The output is =",  num / 5 );
}else{
    console.log("Not divisible by 5")
}

// 5
let val = 105;
if ( val >= 100){
        console.log("The final output is ", val)   
}else{
    console.log("Not greater than 100")
}


// 5 Write a program to check whether a given character is a vowel or consonant.
// 6 Write a program that asks for a username and password. If both match predefined values, print "Login Successful", otherwise "Invalid credentials".

//7
let char = "M";
if("AEIOUaeiou".includes(char) ){
    console.log('it is a Vowel');
}else{
    console.log("It is not Vowel")
}


// Check whether letter Sameer
let Name = "sameer";
if("sameerSAMEER".includes(Name)){
    console.log("hello boss")
}else{
    console.log("You are not boss")
}


//6 
const id = "Sameer";
const password ="IMBoss";
if (id == "Sameer" && password == "IMBoss"){
    console.log("Hello boss" ,id + " " + "Welcome you can have access");
}
else{
    console.log("You are not the Boss !!!! GET LOST");
}

//  7 Write a program that simulates a basic ATM withdrawal If balance is sufficient, deduct the amount and print "Transaction successful".
// If insufficient, print "Insufficient balance".

let balance = 150000;
let withdrawalAmount = 50000;
if ( balance >= withdrawalAmount){
    balance = balance - withdrawalAmount ;
    console.log( "Your remaining balance is " + " " + balance )
}else{
    console.log("Insufficent money go to work haii babu")
}
