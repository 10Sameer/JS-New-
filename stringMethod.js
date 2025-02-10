// str.length to calculate the length of the strings
{
    let a = "Sameer Bhandari is the Best Person";
    console.log(a);
    console.log(a.length);
}

// str.toUpperCase()
{
    let a = "Sameer Bhandari is the Best Person";
    console.log(a.toUpperCase());
}
{
    let a = "asdjfjdhjaaaaaaaaaaaaahajdjakdbahjbdhasgdhagdhj";
    let output =a.toUpperCase();
    console.log(a);
    console.log(output);

}

// str.toLowerCase()
{
    let a = "SAMEER BHANDARI IS THE BEST PERSON";
    console.log(a.toLowerCase());
}

// str.trim() removes whitespaces
{
    let a ="  SAMEER BHANDARI IS THE BEST       PERSON";
    console.log(a.trim());
}

/* slice method str.slice(start,end?)
 in slice method the end value is not printed 
  for example  abcdedns
               01234567
            if we use str.slice(start,end?)
                                1  ,  3
                                b c  */
{
    let a ="SameerBhandari";
    {
        let a ="SameerBhandari";
        console.log(a.slice(2,4));
        console.log(a.slice(2));
    }
    console.log(a.slice(0,4));
}

