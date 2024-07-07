// Question 01

var today = new Date();
document.write(today.toString());

// Question 02

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

var currentMonthIndex = today.getMonth();

var currentMonthName = monthNames[currentMonthIndex];

alert("The current month is " + currentMonthName);

// Question 03

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentDayIndex = today.getDay();

var currentDayName = dayNames[currentDayIndex];

var currentDayShortName = currentDayName.slice(0, 3);

alert("The current day is " + currentDayShortName);

// Question 04

var currentDayIndex = today.getDay();

if (currentDayIndex === 0 || currentDayIndex === 6) {
  alert("It’s Fun day");
} else {
  alert("Today its a working day");
}

// Question 05

var currentDay = today.getDate();

if (currentDay < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}


// Question 06

document.write("<br>" + "<br>")

var today = new Date();

var millisecondsSince1970 = today.getTime();

var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

document.write("Current Date: " + today + "<br>")
document.write("Milli Seconds Since midnight, Jan. 1, 1970: " + millisecondsSince1970 + "<br>")
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970)


// Question 07

var currentHour = today.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM")
}

// Question 08

document.write("<br>" + "<br>")

var laterDate = new Date(2020, 11, 31);

document.write("The later date is: " + laterDate);

document.write("<br>" + "<br>")

// Question 09

var ramdanStartDate = new Date(2015, 5, 18);

var timeDiffernce = today - ramdanStartDate;

var daysPassed = Math.floor(timeDiffernce / (1000 * 60 * 60 * 24));

alert("Number of days passed since 1st Ramadan: " + daysPassed);

// Question 10

var startDate2015 = new Date(2015, 0, 1);

var timeDiffernces = today - startDate2015;

var secondsElapsed = Math.floor(timeDiffernces / 1000);

document.write("On refrence date " + startDate2015 + "<br>" + "Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

document.write("<br>" + "<br>")

// Question 11

var currentHours = today.getHours();

today.setHours(currentHours + 1);

document.write("Update Date and Time: " + today)

document.write("<br>" + "<br>")

// Question 12

var pastDate = new Date(today.setFullYear(today.getFullYear() - 100));
document.write("Date 100 years back: " + pastDate);

// Question 13

document.write("<br>" + "<br>")

var currentDate = new Date();

var UserAge = +prompt("please enter your Age:");

var currentYear = currentDate.getFullYear();

var birthYear = currentYear - UserAge;

document.write("your Age is: " + UserAge + "<br>");
document.write("your birth Year is : " + birthYear);

// Question 14

document.write("<br>" + "<br>")

document.write("<h1>K-Electric Bill</h1>")

var customerName = "Muhammad Ali";
var currentMonth = currentDate.getMonth()
var currentMonthNames = monthNames[currentMonth];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonthNames + "<br>");
document.write("NUmber of units: " + numberOfUnits + "<br>");
document.write("Charges per units: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");