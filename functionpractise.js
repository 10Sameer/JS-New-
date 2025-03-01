// /* Write a function greet that takes a name as a parameter and returns "Hello, [name]!".
//  Function with Default Parameter
//  Modify greet to have a default name of "Guest" if no name is provided. */
//  {
//     function greet (name = "Hello Guest"){
//         return (`Hello, ${name}!`);
//     }

//   console.log(greet("Sameer Bhandari"));
//   console.log(greet());
//   console.log(greet("Hero"));
//   console.log(greet("Cutie"));
//   console.log(greet());
//  }

//  // finding
//  {
//     function number (num){
//         if (num % 2 == 0){
//             return "Even";
//         }else
//         return "Odd";
//     }
//     console.log(`10 is ${number(10)}`);  
//     console.log(`7 is ${number(7)}`);  
//  }

//+++++++++++++________________________+++++++++++++++++++++
{
    function Hello (firstName ="Hello" ,lastName="user" ){
        return (`Welcome ${firstName} ${lastName} sir`);
    }
    console.log(Hello("Sameer",'Bhandari'));
    console.log(Hello());
}
// Write a function greet(name) that takes a name as a parameter and returns "Hello, [name]!".
 {
    function greet (name = "User") {
        return (`Hello, ${name}!`);
    }
    console.log(greet("Sameer Bhandari"));
    console.log(greet());
 }

 //Create a function add(a, b) that returns the sum of two numbers.
 {
    function calculation (a,b,c) {
        return(`The sum of ${a} + ${b} + ${c} = ${a+b+c}`);
    }
    console.log(calculation(50,50,50));
    console.log(calculation(40,40,40));
    console.log(calculation(10,20,30));
    console.log(calculation(2,2,0));
 }

 // Write a function isEven(num) that returns true if the number is even, otherwise false.
 {
    function isEven(num){
        if (num % 2 == 0){
            return (`${num} is Even Number`);
        }
        return (`${num} is Odd Number`);
    }
    console.log(isEven(10));
    console.log(isEven(7));
    console.log(isEven(1567786767867));
    console.log(isEven(75876838767324));
    console.log(isEven(2525578378387));
 }

 // Create a function square(num) that returns the square of a number.
 {
    function square (num ){
          return (`The square of number is ${num} = ${num *num} `)
    }
    console.log(square(10));
    console.log(square(20));
    console.log(square(5848645845484445450));
 }