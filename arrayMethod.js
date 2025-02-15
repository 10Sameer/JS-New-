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
