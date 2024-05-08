let myInfo = {
    name: "ROHINI HS", 
    address: "MALLESWARAM BANGALORE",
     city : "BANGALORE",
     state : "Karnataka",
     zip : "560003"
 };
 printContact(myInfo);
 
 function printContact(mydetails)
 {
    console.log(mydetails.name);
    console.log(mydetails.address);
    console.log(mydetails.state);
    console.log(mydetails.city);
    console.log(mydetails.zip);
 }