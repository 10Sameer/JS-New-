// To find the average marks of the class = 85 97 44 37 76 60
{
    let marks = [85,97,44,37,76,60 ];
    let average ;
    let sum = 0;
    for (let total of marks){
        sum += total;
        average = sum / marks.length
    }
       
    console.log(`The total sum of marks is ${sum}`);
    console.log(`The total average of marks is ${average}`);
}


// using for loop 
{
    let marks =[85,97,44,37,76,60 ]; 
    let sum = 0;
    for (let i = 0 ; i < marks.length ; i ++) {
        sum += marks[i];
        average = sum/ marks.length;
    }
    console.log(sum);
    console.log(average);
}
    

//To calculate 10% off on every item.change the array to store final price after applying offer 
// price are 250 645 300 900 50
{
    let item = [250, 645, 300 ,900 ,50];
    let i = 0 ;
    for(let val of item){
        console.log(`The values at index ${i}= ${val}`);
         let offer = val / 10 ;
         item[i] -= offer ;
         console.log(`The final price after discount is ${item[i]}`);
         i ++;
    }
}
console.log('finished')
console.log('finished')

// using for loop
{
    let item = [250, 645, 300 ,900 ,50];
    for (let i = 0 ; i <item.length ; i++ ){
        let offer = item[i] / 10;
        console.log(`The values at index are ${item[i]}`);
        item[i] -= offer ;
        console.log(`The final price after discount is ${item[i]}`);
    }
}
