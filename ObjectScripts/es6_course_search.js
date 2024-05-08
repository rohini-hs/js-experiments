let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDateD: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDateD: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDateD: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDateD: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDateD: "04/25/24",
        Fee: "50.00",
    }
];

// to find course start date
let courseStartDate = coursestart(courses)
let coursetitle = Coursetitle(courses)
let coursetitles = Coursetitles(courses)
let locationdeatils = locations(courses)


function coursestart(courseMain)
{
   //get the index of the set having courseID
    var index1 = courseMain.findIndex( item => item.CourseId === 'PROG200' );

//read the relevant data
    var value1 = courseMain[index1].StartDateD;
    console.log("The startDate is : ",value1)
   
}

//  What is the title of the PROJ500 course?

function Coursetitle(courseMain)
{
     var getindex = courseMain.findIndex(item => item.CourseId ==="PROJ500");

     let Title = courseMain[getindex].Title;
     console.log("Title of the course is :",Title)
}

//  What are the titles of the courses that cost $50 or less?
function Coursetitles(courseMain)
{
    let allTitles = courseMain.filter(cost50)


    if (allTitles.length > 0) {
        for(i=0;i<allTitles.length;i++)
        {
        console.log(allTitles[i].Title);  
        }// displays the array
     }
     else {
        console.log("No values less tahn 50");
     }
     
}

function cost50(arrayValue)
{
    if (arrayValue.Fee <= 50) {
        return arrayValue.Title;
     }
     else {
        return false;
     }
    

}

//  What  classes meet in "Classroom 1"?
function locations(courseMain)
{
    let locations = courseMain.filter(findClassroom)
    if (locations.length > 0) {
        for(i=0;i<locations.length;i++)
        {
        console.log("meet in room1 :", locations[i].Title);  
        }// displays the array
     }
     else {
        console.log("No values less tahn 50");
     }

}

function findClassroom(arrayValue)
{
    if(arrayValue.Location ==="Classroom 1")
    {
    return arrayValue.Location;
    }
    else
    {
    return false;
    }
}
