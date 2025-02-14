// repetation of arrays 
// Printing of arrays 
// using For loops 
//  for (let i = 0 ; i < arr.length ; i ++ ) where length is last index + 1 soo if last index is 5 the length become 5 + 1  = 6

// example
{
    let name = ["Sameer",'Ram','hero','sita','gita'];
    for ( i = 0 ; i < name.length ; i ++){
        console.log(name[i]);
    }
}
{
    let marks =  [100,90,89,85,75,62,45,86,31,45,67,89,32,45,79,99];
    for (i = 0 ; i < marks.length ; i ++ ){
        console.log(marks[i])
    }
}
console.log("FINISHED FOR LOOP")

// another most used way is Forof loop 
// for (let a of arrayname)

{
    let heroes =['IronMan','SpiderMan','DeltaMan','DrStrange','Thor','CaptainAmerica','BatMan'];
    for(let hero of heroes) // can use any variable ot name instead of a
    console.log(hero);
}

// Printing cities using ForOFloop 
{
    let cities =['ktm','Pokhara','Butwal','Pharping','Kirtipur','Balkhu','Teku','Kalanki','kalimati'];
    for (let city of cities){
        console.log(`The beautiful cities of Nepal are ${city}`); //${city.toUpperCase()} for tempelate uppercase
        console.log(`The beautiful cities of Nepal are `+ "" + city.toUpperCase());
    }
}