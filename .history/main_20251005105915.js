const dateOfBirth = document.getElementById("dob");
const todaysDate = new Date();
const calculate = document.getElementById("submitBtn"); 
const actualDOB = todaysDate - dateOfBirth;

console.log("Your actual age is "+ actualDOB);