/* Write a function greet that takes a name as a parameter and returns "Hello, [name]!".
 Function with Default Parameter
 Modify greet to have a default name of "Guest" if no name is provided. */
 {
    function greet (name = "Hello Guest"){
        return (`Hello, ${name}!`);
    }

  console.log(greet("Sameer Bhandari"));
  console.log(greet());
  console.log(greet("Hero"));
  console.log(greet("Cutie"));
  console.log(greet());
 }

 // finding
 {
    function number (num){
        if (num % 2 == 0){
            return "Even";
        }else
        return "Odd";
    }
    console.log(`10 is ${number(10)}`);  
    console.log(`7 is ${number(7)}`);  
 }

//+++++++++++++________________________+++++++++++++++++++++
 {
    function myName (firstName, lastName){
        return (`The firstName is ${firstName} and lastName is ${lastName}`);
    }
     console.log(myName("Sameer ","Bhandari"));
     console.log(myName("Cutie ","Hero"));
 }
