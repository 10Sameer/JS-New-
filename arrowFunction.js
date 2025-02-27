// Arrow function in js is the modern way of wrtting function in js. It is the most used method of writing function in js.

// example of arrow function
{
  const sum = (a,b) => {
    console.log(`The sum of number is ${a+b}`);
    }
    sum(10,20);
    sum(20,20);
 }

 // another Example 
 {
    const multi = (a,b,c) => {
        return(`The multiplication of three number are ${a*b*c}`)
    }
    console.log(multi(2,2,2)) ;
    console.log(multi(2,2,10)) ;
}


//{ name: "John", age: 25 }? 
     const details = (name, age )=>
     {
    return(`Hello!!! My name is ${name} and age is ${age}`);
    }
     console.log(details("John", 25));

 // basic example of arrow function with no parameter
 {
    const  printHello = () => {
        console.log("Hello");
        return ("Hey using Return");
    }
    printHello();       
    printHello();       
    printHello();       
    printHello();       
    console.log(printHello());       
    console.log(printHello());       
    console.log(printHello());       
        
 }
