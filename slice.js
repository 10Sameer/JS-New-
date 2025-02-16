// slice method helps to print the required output 
{
    let num =['Sameer','ram','aaa','bbb','ccc','ddd','efds'];
    console.log(num.slice(0,5));
    // in slice method if we choose index 5 then only upto index 4 will be choosen ie less than the original choosen value by 1

    {
        let ex = [100,255,278,448,69,456,5448,44]
        console.log(ex.slice(2,5))
    }
}

// splice to del remove in original value
// splice (startidx , del , newElements)
//        ( the index you want to work on , the index that you want to del if you select 3 then 3 index from starting index will be deleted , to update index can update by any no.of element or by null)
{
    let ex = [100,255,278,448,69,456,5448,44]
    console.log(ex.splice(2,5,55,66,77,88));
    console.log(ex);
}

// ques 
{
    let comp = ['Bloomberg','Microsoft','Uber','Google','Ibm','Netflix'];

    //remove First company 
    // to remove first company we need shift method 
    console.log(comp.shift());
    console.log(comp);
    console.log(comp.splice(1,0,"Ola"));
    console.log(comp);
    console.log(comp.push("Amazon"))
    console.log(comp);
    console.log(comp.toString());
}