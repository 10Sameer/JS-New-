// Convert the greet(name) function into an arrow function.
{
    const greet = (Details = "Guest") =>{
        return (`Hello ,Welcome ${Details}!`);
    }
    console.log(greet("Sameer Bhandari"));
    console.log(greet());
}
  
//Convert the add(a, b) function into an arrow function. 
{
    const addNumber = (a,b,c,d) => {
        return (`The sum of ${a} + ${b} +${c} +${d}   = ${a+b+c+d}`);
    }
     console.log(addNumber(10,40,10,40));
     console.log(addNumber(10,150,10,45));
}

//Create an arrow function double(num) that returns the double of a given number.
{
    const doubleNum = (num) =>{
        return (`The double of the number ${num} = ${num *2}`);
    }
    console.log(doubleNum(10));
    console.log(doubleNum(20));
    console.log(doubleNum(30));
    console.log(doubleNum(40));
    console.log(doubleNum(50));
}
