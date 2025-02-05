//Let variable is one of the most used variable in Js
//the problem of var is solved by let variable
//it doesnt allow to redeclare the variable but the value can be modified 

//Example of let
let Name = "sameer";
console.log (Name)



console.log ("Showing the concept where the variable cannot be redecleared but can be modified")


// concept
let a = 5;
let b = 15;
{
    let a = "changed from 5 to 10";
    let b = "changed from 15 to 25";
    console.log(a);
    console.log(b);

    {
        let a = "changed from 5 to 10 and FINALLY to 100 " ; 
        let b = "changed from 15 to 25 and FINALLY TO 00" ;
        console.log(a);
        console.log(b);
    }
}
console.log(a);
console.log(b);

//THE difference is shown here where Var print the last modified value by LET prints the First value




// another simple example
 let name = "sameer";
 console.log(name)
 name = "hero";
 console.log(name)