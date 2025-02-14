// Arrays is defined as the indexed collection of homogoneous Unit 
// example of array 
{
    let Std =["Sameer",'Ram','hero','sita','gita'];
    console.log(Std);
    console.log(Std.length);
}
{
    let marks = [100,90,89,85,75,62,45,86,31,45,67,89,32,45,79,99];
    console.log(marks);
    console.log(marks.length);
    console.log("FINISHED")
}

//index of an array printing an individual item of an array
{
    let marks= [100,90,89,85,75,62,45,86,31,45,67,89,32,45,79,99];
    console.log(marks[0]);
    console.log(marks[1]);
    console.log(marks[2]);
    console.log(marks[3]);
    console.log(marks[4]);
    console.log(marks[0] + marks[1] + marks[2] ); //adding the marks using index
    console.log(marks[0] , marks[1] , marks[2] ,marks[3]); 
    console.log(`${marks[0]} ${marks[1]} ${marks[2]} ${marks[3]} `)
    //coverting the marks of array 
    marks[0] = 99.5 
    marks[1] = 94.5 
    console.log('the marks 100 is changed to 99.5 and marks 90 is changed to 94.5')
    console.log(marks[0] , marks[1] ); // the marks 100 is changed to 99.5 and marks 90 is changed to 94.5
}