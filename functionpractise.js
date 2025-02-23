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