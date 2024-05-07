

//add this to a function

function parseAndDisplayName(fullnameString)
{
//enter the first and last name to a string
let fullname = fullnameString;

//parse the string into seperate strings
let splitName = fullname.indexOf(" ");

//retrive first name
let firstName = fullname.substring(0,splitName);

let secondName = fullname.substring(splitName+1);

console.log('firstName is :' ,firstName);
console.log('Second Name is : ',secondName);
}

//Call function
parseAndDisplayName("Abhinav Jois");
parseAndDisplayName("Amaresh Manjunath");
parseAndDisplayName("Rohini HS");