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

    //Write an arrow function multiply(a, b) that returns the product of two numbers.
    {
        const multiply = (a,b) => {
            return (`The product of ${a} * ${b} = ${a*b}`);
        }
        console.log(multiply(10,10));
        console.log(multiply(10,20));       
        console.log(multiply(2,2));       
    }

    // finding Vowels 
    {
        const findVowel = (vowel) => 
        {
            let vowelCount = 0 ; 
            for ( let i = 0 ; i <= vowel.length ; i++)
            {
                if ( "aeiouAEIOU".includes(vowel[i]))
                {
                    vowelCount++;
                }
            }
            return(`The total number of vowels in the string is ${vowelCount}`);
        }
        console.log(findVowel("Sameer Bhandari"));
        console.log(findVowel("Hello World"));
        console.log(findVowel("aaaaaAAA"));
        
    }

    //finding Consonants
    {
        const findConsonant = (str) => {
            let consonantCount = 0;
            for (let i = 0 ; i < str.length ; i++){
                if(!"aeiouAEIOU".includes(str[i])){
                    consonantCount ++ ;
                }
            }
            return(`The total number of consonants in the string is ${consonantCount}`);

        }
        console.log(findConsonant("Sameer Bhandari"));
        console.log(findConsonant("Hello World"));
        console.log(findConsonant("aaaAAAc"));
    }
