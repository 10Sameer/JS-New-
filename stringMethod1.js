
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
    console.log(str.replace("he","y") , str.replace("o","i"));
    console.log(`C is removed by b ${a.replace("C","b")} and ${a.replace("s","y")}`)
}

{
    let a = "Hello" ;
    let b= "Hellolololo" ;
    console.log(a.replace("lo","p"))
    //only replace the first lo and donot touch the second value
    // replace all method replace all the lo in the code
    console.log(b.replace("lo","p"))
    console.log(b.replaceAll("lo","p"))
}
// str.charAt(index) used to find the letter that resides at a particular place 
{
    let str = "Sameer";
    console.log(str.charAt(0));
    console.log(str.charAt(1));
    console.log(str.charAt(2));
    console.log(str.charAt(3));
    console.log(str.charAt(4));
    console.log(str.charAt(5));
    console.log(str.charAt(6));

    // another method 
    {
        let a = "Hero";
        console.log(a [0] , a[1] , a [2] , a [3]) ;
        console.log(a [0] + a[1] + a [2] + a [3]) ;
        console.log(a.replace("H","S"));
    }
}