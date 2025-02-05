//there are three types of variable used in Js 

// Var used to be mostly used in past but now var isnot used 
// the var can be redecleared as many time as you wish using a block of code

// example
 var a = 15 ;
 var Name = 'Sameer';
 console.log(Name);
 console.log(a)

 //the main problem with var 
 console.log ('The Problem of Var')

 var a = 10;
 var a = 20;
 var a ="sameer"
 var b = 5;
 console.log(a)
 {
    // first block of code for var
    a = 'its changing to 15';
    b ="its changing to 25";
    console.log(a);
    console.log(b);

     // second block of code for var
    {
     a = "Its also changing from 10 to 15 to NOW THE CURRENT FORM";
     b= "Its changing from 5 to 25 to NOW THE CURRENT";
     console.log(a);
     console.log(b);      

      }
 }

 // Now the last changed value will be print even if we are out of this block
 console.log(a)
 console.log(b)





