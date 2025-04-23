//1&2 area and perimeter of rectangle

let length=5;
let width=3;
let rectangleArea= (length*width);
let perimeter=(length+width)*2;

console.log(rectangleArea);
console.log(perimeter);
 

// 3 diameter, circumference, and area of a circle
let radius=5;
let diameter= radius*2;
const pi=3.14;
let circumference=(2*radius*pi);
let circleArea=(pi*radius*radius);
console.log(diameter);
console.log(circumference);
console.log(circleArea);

//4 angles of triangle

let angleA=80;
let angleB=65;
let angleC=(180-angleA-angleB);

console.log(angleC);


//5 convert days to years, months, and days

let totalDays = 400;
let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;
let months = Math.floor(remainingDays / 30);
let days = remainingDays % 30;
console.log(`${totalDays} days = ${years} year(s), ${months} month(s), ${days} day(s)`);

//6 difference between days 


let date1=new Date("2022-01-20");
let date2=new Date("2022-01-22");
let diffInMs= (date2-date1);
let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

console.log(`Difference is ${diffInDays} days`);

//let diffInMs = date2 - date1;
//Calculates the time difference between two dates.date2 - date1 subtracts two JavaScript Date objects.The result is a number in milliseconds (ms) Example: If the dates are 11 days apart, the result is 950400000 msdiffInMs literally means: “difference in milliseconds”

//et diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
//This line:Converts milliseconds to days 1000 * 60 * 60 * 24 = number of milliseconds in 1 day.Dividing diffInMs by that number gives you the difference in days.Math.floor() rounds it down to a whole number (just in case it’s like 11.9 days)

//diffInDays means: “the number of whole days between the two dates”

//bisa juga 1 line pakai rumus let diffInDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
