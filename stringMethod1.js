
// for concatination for joinning 2 strings  
// syntax str1.concat(str2)
{
    let str1 = " Sameer ";
    let str2 = " is ";
    let str3 = " a hero ";
    let output = str1.concat(str2,str3);
    let output1 = str3.concat(str1,str2);
    
    console.log(output);
    console.log(output1);
}

// concatination can be done used by using + 
{
    let a = 'Sam';
    let b = 'eer';
    let res = `My name is ${a + b}` ;
    console.log(res);
}


// str.replace (searchVal ,newVal) is used to search and replace existing value
{
    let str = "hello";
    let a = "Classmate";
    console.log(str.replace("h","y") , str.replace("o","i"));
    console.log(`C is removed by b ${a.replace("C","b")} and ${a.replace("s","y")}`)
}