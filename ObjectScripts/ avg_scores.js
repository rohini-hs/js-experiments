let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100];

getMyAvg = getAverage(myScores);
console.log ("My average is :" , getMyAvg)

getyourAvg = getAverage(yourScores);
console.log("Your average is:",getyourAvg);


function getAverage(arrayList)
{
    let length = arrayList.length
    let count = 0;
    for(i=0;i<length;i++)
    {
       count = (count + arrayList[i]);
    }
     return count/length;
}