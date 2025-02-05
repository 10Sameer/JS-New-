//Creating an object in Js
// Collection of details or information about some specific topics

const details = {
    Name : "Sameer ",
    Caste : "Bhandari",
    Age : 18 ,
    Address : "Kirtipur",
    Country : "Nepal"
};
 
// used to print or show individual Details
console.log(details);
console.log(details["Name"] + details["Caste"]);

//another way using dot 
console.log(details.Age);
console.log(details.Name + details.Caste);

// Modifying the details inside 
details["Name"] = details["Name"] + details["Caste"] + " " + "Hero" ;
console.log(details.Name)

// Modifying the Age 
details["Age"] = details['Age'] + 1 ;
console.log(details["Age"]);


// Create an Object and store the your information Check whether you have social Id or  not and later modify the values according to you.Also 
// use dot and other method to print the objects information

const information ={
    Name : " Sameer ",
    Surname : "Bhandari",
    Caste : "Chetteri",
    Address : "Kathmandu",
    Age : 19 ,
    Nationality : "Nepal",
    Study : "Bachelors",
    Course : " BCA",
    bestClub :"Manchester United",
    theGoat : "Leo Messi" ,
    haveInstagram : true,
    havetwitter : false,
    havefacebook : true
};

console.log(information);

// Showing individual data
console.log(information["Name"] + information["Surname"] +" " + "is biggest fan of" +" " + information.theGoat);
console.log(information.Name + information.Surname + " " + "Loves " + " " + information.bestClub)

//Modifying the values
// where we can change the information detail by using Let block of code 
// we can normally change the details by simply
//      information.Name = " Hero"
//      console.log(information.Name); 
// but we are using LET block for better pratice

{
    let information = {
        Caste: "Bhramin",
        Name : "Hero"
    };
    
    // Change the caste to "Brahmin"
    information.Caste = "Brahmin";
  
    
    console.log(information.Caste); 
    
}


// changing the age
information.Age = information.Age + 1 ;
console.log(information.Age);

