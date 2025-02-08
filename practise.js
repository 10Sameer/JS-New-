// PRint even number From 0 to 100 can use any method

// using for loop method
{
    let num = 100 ;
    let i ;
    for (i = 0 ; i <= num ; i ++ ){
        if(i % 2 == 0){
            console.log("The Even numbers are ", i) ;
        }
    }
}

// Sum of Odd number using While 
{
    let num = 100 ;
    let i = 0;
    let sum = 0 ;
    while (i <= num){
        if(i % 2 == 0){
            sum = sum + i ;
            console.log("The sum of odd numbers are" , sum);
        }
           i ++ ; 
    }       
     console.log("Ended");
}