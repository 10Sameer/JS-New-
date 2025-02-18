/* basic concept about array method and string method
   First we are gonna discuss about arrayMethod
   _____________+++++++++++++++++++++++++++++__________________________________++++++++++++++++++++++++++++++++

   1. pushMethod = push();
   It is normally Used to push an element into the list of array 
   in push method the pushed element or item is push at last 


 //FOR EXAMPLE
 {
 let num = [100,200,300,400,500,600]
 // let toAddNumber = 700 // We want to add 700 to the list of num
 num.push(700,800) // the number 700 is push at last so output will be 100,200,300,400,500,600,700,800
 console.log(num);
}

__________++++++++++++++_______________++++++++++++++++++++________________++++++++++++++++________________++++++++++++++

  2. PopMethod = pop();
  It is used to delete or bring elements items out of an array 
  in pop method the last elements are deleted 
  
  FOR EXAMPLE 
{
    let num = [100,200,300,400,500,600,700,800];
     if we want to delete 800 then we can simple use pop method 
    console.log(`Before using popMethod === ${num}`);// output [100,200,300,400,500,600,700,800];
    num.pop();
    console.log(`After using popMethod === ${num}`);  //output [100,200,300,400,500,600,700];, 800 will be deleted 
    num.pop();
    console.log(`After again using popMethod === ${num}`);  //output//output [100,200,300,400,500,600,700];, 800 will be deleted ;, 700 will be deleted 
     final output = //output [100,200,300,400,500,600,700];, 800 will be deleted 
    console.log("FINISHED")
}

We can use pop method multiple time like this
num.pop(); 
num.pop(); 
num.pop(); 
num.pop();


// To make code modular we can use for loop method instead of using pop multiple times
{
    let num = [100,200,300,400,500,600,700,800];
    let n = 3 // Number of elements that we want to delete
    for (let i = 0 ; i < n ; i++){
        num.pop();
    }
    console.log("After removing 3 elements:", num);
}

___________________________+++++++++++++++++++++++++++++++++++______________________________++++++++++++++++++++++++++++

  3. toString()
  This method is simple used to print the list of array in basic form 
  they are seperated by commas 

//FOR EXAMPLE 
{
    let cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla"];
    let num = [100,200,300,400,500,600,700,800];
    console.log(num);
    console.log(cars);
    console.log(`The names of cars are ${cars.toString()}`);
    console.log(`The mumbers are ${num.toString()}`);
}


__________________________+++++++++++++++++++++++++++++++++______________________________++++++++++++++++++++++++++++++++++

  4. concat()
  this method is used to join two or more strings into the list of array 
  // we need a list of arrays for ex let it be car 
  let car = [.........................]
  we need another list of arrays that can concat or join to the list of car 
  let newCar = [..................]
  finally we need a new variable so that we can put the final result by joining the two arrays
  let result = car.concat(newCar);
  console.log(result)

 // FOR EXAMPLE 
{ 
    let car= ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla"];
    let newCars = ["Camry", "Civic", "Mustang"];
    console.log(car);
    console.log(newCars);
    let totalCars = car.concat(newCars);
    console.log(totalCars);
    console.log(totalCars.toString());
}

___________________________________++++++++++++++++++++++++++++++++____________________________________________+++++++++++++++

5. Unshift() and shift() method 
 Unshift is used to add new value from the front ....This method is opposite to the push method where the value is added from the last
 shift method is used to delete the element from front....This method is opposite to the pop method where value is deleted from last

 // FOR EXAMPLE
 {
    let car = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla"];
    console.log("The original array of car ==  " + car.toString());
    //using unshift method to add element from front
    car.unshift("abc","Xyz");
    console.log("After using unshift to add new cars on front ==  " + car.toString()); // abc,xyz will be added at front
    car.push("zyx","cba");
    console.log("After using push to add new cars on last ==  " + car.toString()); // zyx cba will be added at last
    car.shift();
    car.shift();
    console.log("After using hift to remove new cars on front ==  " + car.toString()); // abc,xyz will be removed from front
    car.pop();
    car.pop();
    console.log("After using pop to remove new cars on last ==  " + car.toString()); // zyx cba will be removed at last
}

____________________________+++++++++++++++++++++++++++_____________________________________________+++++++++++++++++++++++++++
 6. slice() Method 
 --------- slice(0,5)
 starts scanning from 0 to 5 index and then delete the,remove the elements from choosen 5th index 
 this method is used to remove the data in array by using the indexes 
 if we use the slice (3,8)
 all the value from 0 to 2 are deleted and from exactly form 8 to remaining index 

  //FOR EXAMPLE
 {
    let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Peach", "Cherry"];
    console.log(`The list of fruits == ${fruits.toString()}`);
    console.log(`The list of selected fruits from index (3,8) === ${fruits.slice(3,8).toString()}`); 
}

{
    let num = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] ;
    console.log(`The list of numbers === ${num.toString()}`);
    console.log(`The list of selected Numbers from index (1,6) === ${num.slice(1,6).toString()}`); 
}

__________________________+++++++++++++++++++++++++++++++++++++++++++++++++++++___________________+++++++++++++++++++++++++++++++
  7. splice(..,..,..)
splice to del remove in original value
// splice (startidx , del , newElements)
//        ( the index you want to work on , the index that you want to del if you select 3 then 3 index from starting index will be deleted , to update index can update by any no.of element or by null)
// FOREXAMPLE

{
    let num = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] ;
    console.log(`The list of selected Numbers from index (1,6) === ${num.splice(2,4,1200,1500,1600).toString()}`); 
    console.log(`The list of selected Numbers from index (1,6) === ${num.toString()}`); 
}


*/

