//concat
{
    let a = " Sameer";
    let b = " Bhandari" ;
    let c = " is a don ";
    let res =a.concat (b,c,a);
    console.log(res)
}

// replace
{
   
    let b = "SameerBhandariisaherooo";
    let a = "Classmate";
    console.log(`C is removed by b ${a.replace("C","b")} and ${a.replace("s","y")}`)
    console.log(b.replace("m","Y"));  
}

// charAt gives index
{
    let letter = "ThisIsJS"
    console.log(letter.charAt(0))
    console.log(letter.charAt(1))
    console.log(letter.charAt(2))
    console.log(letter.charAt(3))
    console.log(letter.charAt(4))
    console.log(letter.charAt(5))
    console.log(letter.charAt(6))
    console.log(letter.charAt(7))
   
}
//another method of charat
{
    let a = "Lucky";
    console.log(a[0] , a[1] , a[2] , a[3] , a[4]);
    console.log(a[0] + a[1] + a[2] + a[3] + a[4]);
    console.log(a.replace("L","Y"))
}
