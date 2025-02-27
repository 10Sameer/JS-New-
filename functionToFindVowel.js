// a e i o u Finding the vowels 
{
    function findVowel (str){
        let count = 0 ;
        for(const char of str){
            if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
                count++;
            }
        }
        console.log(`The total number of vowels in the string is ${count}`);
    }
    findVowel("Sameer Bhandari");
    findVowel("Hello World");   
}

//
{ 
    const findVowel = (vowel) => {
        let count = 0 ;
        for (let i = 0 ; i <= vowel.length ; i ++ ){
            if ( aieou . includes (vowel[i])){
                count++;
            }
        }
        console.log(`The total number of vowels in the string is ${count}`);
    }
}
    findVowel("Sameer Bhandari");
    findVowel("Hello World"); 

    // consonant
    {
        function findConsonant (str){
            let count = 0 ;
            for(const char of str){
                if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u"){
                    count++;
                }
            }
            console.log(`The total number of consonant in the string is ${count}`);
        }
        findConsonant("Sameer Bhandari");
        findConsonant("aaaaaaaaaaaaaas");   
    }
    
    

