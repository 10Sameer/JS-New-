// creating a simple function
 /* Basic form of Function 
  function anyFunctionName(){
        block of code
  }

   recalling the function = anyFunctionName();
} */

function functionName(){
    console.log("Sameer Bhandari");
    console.log("Hello Im learing javascript");
    let a = [100,200,300,400,500,600,700,800];
    console.log(a.toString());
    let car = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla"];
    let newcar = ["Ferrari", "Lamborghini", "Bugatti", "Koenigsegg", "Pagani"];
    let Cars = car.concat(newcar);
    console.log(Cars.toLocaleString());
}
 functionName();
 functionName();
 functionName();


 // Function using parameters and arguments 
  function Name(msg){
    console.log(msg)
  }
  Name("Im Sameer Bhandari");
  Name("Im Sameer Bhandari learning JS");


  // function for calculating sum of two numbers 
  function sum(a,b){
    console.log(`The sum of two number is = ${a+b}`);
  }
   sum(5,50);
   sum(5,10);
   sum(10,10);


   // using return statement in function
   {
   function add (a , b ,c){
    console.log("Before Returning");
    return a+b+c;
   }
   console.log("First Method");
   console.log(add(10,20,30)); 

    console.log("Second Method");
    let sum = add (10,20,30);
    console.log(sum);
    }