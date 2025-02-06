// While condition is similar to For loop condtion

//syntax
// while(Condtion){
//  it true this block is executed console.log(" ")
//         Condition ++
//  }
//      end of the loop

// Simple example Print Sameer 5 times.
      let num = 1 ;
      while (num <= 5 ){
        console.log("Sameer");
         num++;
      }
      console.log("Ended");
      
//Wroking of While 
let i = 0;
while (i <= 5){
    console.log("i =" , i);
    i ++ ;
}
 console.log('Ended');

 // Finding sum of number
 {
    let i = 1 ;
    let num =20 ;
    let sum = 0;
    while ( i <= num ){
        sum = sum + i;
        i ++ ;
        console.log("The sum of number is ", sum);
    }
    console.log("ended");
 }

 // Factorial
 {
    let i = 1;
    let num = 10;
    let fac = 1;
    while(i <= num ){
        fac = fac * i ;
        i ++;
        console.log("The factorial is", fac);
    }
    console.log("ENDED");
 }


 // Even odd 
 {
    let i = 0;
    let num = 50;
    while (i <= num){
        if(i % 2 === 0){
            console.log("The even numbers are",i );
        }
        i ++;
    }
           console("ENDED");
 }