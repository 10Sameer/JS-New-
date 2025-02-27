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

