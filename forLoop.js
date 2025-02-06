//For loop is used for printing number of statement repetative nuymber of times
//Syntax
//   for(let i = 1 ; i <= Condition ; i++)

// Printing my name 10 times

    for (let i = 1 ; i <= 5 ; i ++ ){
        console.log("Sameer")
        }
    console.log("Loop has been Ended");


// For finding the sum of numbers from 1 to 15
let sum = 0 ;
for (let i = 1 ; i <= 15 ; i++){
    sum = sum + i ;
    console.log("The sum of numbers are ", + sum);
}
  console.log("The loop has ended");


  // for finding the sum of n numbers 
  let num = 25;
  let s = 0 ;
  for (i = 1 ; i <= num ; i++ ){
  s = s + i ;
  console.log("The sum of numbers are ", + s);
}

// //Simple working of for Loop

for (let i = 1 ; i <= 5 ; i ++ ){
    console.log("i =", i)

}    
  

// Print all even numbers from 1 to 20 
let number = 20 ;
for (i = 1 ; i <= number ; i++){
   if (i % 2 == 0 ){
    console.log("The Even number are ", i)
   }  
}
console.log("Ended")