/* This is used to repeat the stings "Sameer" etc and arrays to the number of times 
 The one of the best method for strings it doesnot need any initailization ,upadation and stopping condtion

            syntax
       for ( let i of str ) 
       where i val a any value can be used ...We normally Use val
       str is the sting used for declearation  */


// Simple example of For 
let str = "Sameer Bhandari"  ;
for (let a of str){
     console.log ("a ", a) ;
}  
    console.log("ended") ;


// To determine the size and individual Strings 
{
    let value = "IMacoder";
    let length = 0 ;
    for (let i of value){
        console.log("The letter are", i);
         length ++ ;
    }
    console.log("The Total length of string is", length);
}