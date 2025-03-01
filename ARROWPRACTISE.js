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

//Write an arrow function getLength(str) that returns the length of a given string.
{
    const lengthOfString = (str) => {
       return (`The length of the ${str} is ${str.length} `) ;
    }
    console.log(lengthOfString("Sameer Bhandari"));
    console.log(lengthOfString("Hello World"));
    console.log(lengthOfString("Hello World??!"));
    
}

//Write an arrow function isPositive(num) that checks if a number is positive.
    {
        const isPositive = (num) =>{
            if (num > 0){
                return (`The ${num} is positive number`);
            }
            return (`The ${num} is negative number`);
        }
        console.log(isPositive(10));
        console.log(isPositive(-11));
    }