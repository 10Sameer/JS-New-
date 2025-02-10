// `The process of adding value of object using ${ }`
// `String text ${Expression} String Text`
// also known as string interpolation
{
    let specialFunc = `This is a template literal`;
    let specialFunc1 = `This is a template literal ${5+5+10}`;
    console.log(specialFunc);
    console.log(specialFunc);
    console.log(typeof(specialFunc));
}

// Template literals is mostly used in objects
{
    let std = {
        name : 'Sameer' ,
        surname : 'Bhandari',
    };
    console.log(`My name is ${std.name} and Surname is ${std.surname}`);
}


// another example 
{
    let details = {
      item : 'Boots',
      price : 5500 ,
      color : 'Red',
      quality : 'A Grade'

    };
    console.log(`The price of ${details.item} is ${details.price} and is in ${details.color} color and has ${details.quality}`) ;
}