//inputs
let foodcost = 70.95;
let tips = 10;
let tax = 15.45;

//calculate the total
let TotalAmount = foodcost + tips + tax;

//output the value
console.log("Amount to pay : " ,TotalAmount);

//output complicated message
console.log("Amount payable :" , foodcost + tax);
console.log("Tip amount :" , tips);
console.log("Total amount payable is : ", TotalAmount);

//add to fix
console.log("tip amount is : " ,tips.toFixed(2));
