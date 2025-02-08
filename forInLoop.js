// For in loop is used for Objects and arrays 
// It stores the key value of the object 

//  syntax
// For (let key in std ) 
//    key i val a is same 
//   std is the container that stores the object details


// simple example 
{
    let Std = {
        name : 'Sameer Bhandari',
        rollno : 16 ,
        sub : 'Js',
        country : ' Nepal '
    } ;
      for (let key in Std) {
        console.log("The keys are", key + '.'  , "The values are" , Std[key]);
        // console.log("The value are ", Std) ;
      }
      
}

// Another ex 
{
    const value = {
        name : "Hero",
        superName : "Super Hero",
        superPower : " Being Perfect" ,
        weakNess : "404 Weakness Not Found",
        personality : "Handsome Dashing Brillant perfect Cutiepie"
    };
     for (const key in value){
        console.log("Key = ", key +" ", "Values :", value[key]);
     }
}