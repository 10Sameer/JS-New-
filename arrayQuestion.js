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
    



