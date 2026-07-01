// Program to check city name
//var city = prompt("Enter your city name:");

//if (city === "Karachi") {
//    console.log("Welcome to city of lights");
//}

// Program to check gender
//var gender = prompt("Enter your gender:");

//if (gender === "male") {
 //   console.log("Good Morning Sir");
//} else if (gender === "female") {
//    console.log("Good Morning Ma'am");
//}

// Program to check traffic signal color
//var signalColor = prompt("Enter traffic signal color:");

//if (signalColor === "Red") {
 //   console.log("Must Stop");
//} else if (signalColor === "Yellow") {
 //   console.log("Ready to move");
//} else if (signalColor === "Green") {
 //   console.log("Move now");
//} else {
 //   console.log("Invalid color entered");
//}

// Program to check fuel level
//var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

//if (fuel < 0.25) {
 //   console.log("Please refill the fuel in your car");
//}

//var a = 4;
//if (++a == 5) {
  //  alert("given condition for variable a is true");
//}

//var b = 82;
//if (b++ === 83) {
   // alert("given condition for variable b is true");
//}

//var c = 12;
//if (c++ === 13) {
    //alert("condition 1 is true");  
//}
//if (c === 13) {
    //alert("condition 2 is true"); 
//}
//if (++c < 14) {
   // alert("condition 3 is true");  
//}
//if (c === 14) {
    //alert("condition 4 is true");  
//}


//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;

//if (totalCost === laborCost + materialCost) {
  //  alert("The cost equals"); 
//}

//if (true) {
  //  alert("True");  
//}
//if (false) {
    //alert("False"); 


   // if ("car" < "cat") {
   // alert("car is smaller than cat");  
//}


// Program to calculate marks and grade
//var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
//var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
//var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
//var totalMarks = parseFloat(prompt("Enter total marks:"));

//var marksObtained = subject1 + subject2 + subject3;
//var percentage = (marksObtained / totalMarks) * 100;
//var grade = "";
//var remarks = "";

//if (percentage >= 80) {
   // grade = "A-one";
   // remarks = "Excellent";

//} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
//} else if (percentage >= 60) {
    //grade = "B";
   // remarks = "You need to improve";
//} else {
   // grade = "Fail";
   // remarks = "Sorry";
//}

//console.log("===== Marks Sheet =====");
//console.log("Total marks: " + totalMarks);
//console.log("Marks obtained: " + marksObtained);
//console.log("Percentage: " + percentage + "%");
//console.log("Grade: " + grade);
//console.log("Remarks: " + remarks);


// Guess the number game
//var secretNumber = 7; // You can change this number
//var guess = parseInt(prompt("Guess the secret number (1-10):"));

//if (guess === secretNumber) {
  //  console.log("Bingo! Correct answer");
//} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
   // console.log("Close enough to the correct answer");
//} else {
   // console.log("Wrong guess! Try again.");
//}


// Program to check if number is divisible by 3
//var number = parseInt(prompt("Enter a number:"));

//if (number % 3 === 0) {
 //   console.log(number + " is divisible by 3");
//} else {
 //   console.log(number + " is not divisible by 3");
//}

// Program to check even or odd number
//var number = parseInt(prompt("Enter a number:"));

//if (number % 2 === 0) {
 //   console.log(number + " is an even number");
//} else {
 //   console.log(number + " is an odd number");
//}


// Program to check temperature
//var temp = parseFloat(prompt("Enter temperature:"));

//if (temp > 40) {
  //  console.log("It is too hot outside.");
//} else if (temp > 30) {
  //  console.log("The Weather today is Normal.");
//} else if (temp > 20) {
 //   console.log("Today's Weather is cool.");
//} else if (temp > 10) {
 //   console.log("OMG! Today's weather is so Cool.");
//} else {
  //  console.log("It's very cold outside!");
//}

// Simple calculator using if statements
//var num1 = parseFloat(prompt("Enter first number:"));
//var num2 = parseFloat(prompt("Enter second number:"));
//var operation = prompt("Enter operation (+, -, *, /, %):");

//var result = 0;

//if (operation === "+") {
 //   result = num1 + num2;
 //   console.log(num1 + " + " + num2 + " = " + result);
//} else if (operation === "-") {
 //   result = num1 - num2;
 //   console.log(num1 + " - " + num2 + " = " + result);
//} else if (operation === "*") {
 //   result = num1 * num2;
 //   console.log(num1 + " * " + num2 + " = " + result);
//} else if (operation === "/") {
   // if (num2 !== 0) {
   //     result = num1 / num2;
   //     console.log(num1 + " / " + num2 + " = " + result);
   // } else {
   //     console.log("Error: Cannot divide by zero!");
   // }
//} else if (operation === "%") {
    //result = num1 % num2;
    //console.log(num1 + " % " + num2 + " = " + result);
//} else {
   // console.log("Invalid operation!");
//}

// Program to check if input is number, uppercase, or lowercase
//var char = prompt("Enter a character:");

// Get ASCII code
//var ascii = char.charCodeAt(0);

//f (ascii >= 48 && ascii <= 57) {
   // console.log(char + " is a number");
 //   alert(char + " is a number");
//} else if (ascii >= 65 && ascii <= 90) {
  //  console.log(char + " is an uppercase letter");
  //  alert(char + " is an uppercase letter");
//} else if (ascii >= 97 && ascii <= 122) {
   // console.log(char + " is a lowercase letter");
  //  alert(char + " is a lowercase letter");
//} else {
  //  console.log(char + " is a special character");
  //  alert(char + " is a special character");
//}

// Program to find larger of two integers
//var num1 = parseInt(prompt("Enter first integer:"));
//var num2 = parseInt(prompt("Enter second integer:"));

//if (num1 > num2) {
 //   console.log(num1 + " is larger than " + num2);
  //  alert(num1 + " is larger than " + num2);
//} else if (num2 > num1) {
 //   console.log(num2 + " is larger than " + num1);
  //  alert(num2 + " is larger than " + num1);
//} else {
 //   console.log("Both numbers are equal");
  //  alert("Both numbers are equal");
//}

// Program to check if number is positive, negative, or zero
//var number = parseFloat(prompt("Enter a number:"));

//if (number > 0) {
 //   console.log(number + " is positive");
 //   alert(number + " is positive");
//} else if (number < 0) {
 //   console.log(number + " is negative");
  //  alert(number + " is negative");
//} else {
 //   console.log("The number is zero");
//    alert("The number is zero");
//}

// Program to check if character is a vowel
//var char = prompt("Enter a character:").toLowerCase();

//if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
 //   console.log(true + " - " + char + " is a vowel");
 //   alert(true + " - " + char + " is a vowel");
//} else {
 //   console.log(false + " - " + char + " is not a vowel");
 //   alert(false + " - " + char + " is not a vowel");
//}



// Program to validate password
//var correctPassword = "myPassword123"; // Store correct password

//var userPassword = prompt("Enter your password:");

//if (userPassword === "") {
 //   console.log("Please enter your password");
 //   alert("Please enter your password");
//} else if (userPassword === correctPassword) {
 //   console.log("Correct! The password you entered matches the original password");
 //   alert("Correct! The password you entered matches the original password");
//} else {
 //   console.log("Incorrect password");
 //   alert("Incorrect password");
//}


//var greeting;
//var hour = 13;

//if (hour < 18) {
 //   greeting = "Good day";
//} else {
 //   greeting = "Good evening";
//}

//console.log(greeting);

// Program to convert 24-hour time to 12-hour format
//var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

//var hours = Math.floor(time / 100);
//var minutes = time % 100;
//var period = "";

//if (hours >= 0 && hours < 12) {
 //   period = "am";
 //   if (hours === 0) {
  //      hours = 12; // 12:00 am
  //  }
//} else if (hours >= 12 && hours < 24) {
  //  period = "pm";
   // if (hours > 12) {
   //     hours = hours - 12;
   // }
//} else {
 //   console.log("Invalid time format");
 //  alert("Invalid time format");
//}

//console.log("Time: " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period);
//alert("Time: " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period);