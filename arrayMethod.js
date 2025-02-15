// push method in array
// simply used to push an string integers into arrays
{
    let name =['sam','eer','bha','nad','ri'];
    name.push('Hero','cute','perfect');
    console.log(name)
}
{
let num = [1,2,3,4,5,6,7,8,9];
num.push(10);
 console.log(num)
}

// pop used to delete item for last
{
    let name =['sam','eer','bha','nad','ri'];
    let deletedName =name.pop();
    console.log(name) ; 
    name.pop(); // here the last element ri is deleted
    console.log(name) ; 
    name.pop();
    console.log(name) ; // nad is deleted
    console.log('Deleted name =', deletedName)
}

// toString method used to print array basic from
// seperated by commas 
{
    let name =['sam','eer','bha','nad','ri'];
    let marks=[100,95,89,96,84,78];
    console.log(name);
    console.log(name.toString());
    console.log(marks.toString());
}

// concat to join multiple arrays 
// concat makes new array by combining these arrays
{
    let car = ["Volvo", "BMW", "Ford", "Mazda"];
    let superCars = ['Supra', 'RollsRoyce','Lambo','davidPutra'];
    let cars = car.concat(superCars);
    console.log(car);
    console.log(superCars);
    console.log(cars);
    console.log(cars.toString());
}

// can pass mutiple arrays 
{
    let manU = ['Degea','licha','Cr7','deligt','Harry'];
    let barca = ['Messi','stegan','busquet','puyol','xavi'];
    let sagarMatha = ['Sameer','Kc','Rawal','ojha','Tamang',
        'chaudary','Ambani','Praj'];
        console.log(manU);
        console.log(barca);
        console.log(sagarMatha);
    let bestTeam = sagarMatha.concat(barca,manU);
    console.log(bestTeam.toString())
}