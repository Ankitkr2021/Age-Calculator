const calculate = document.getElementById("submitBtn"); 
const dateOfBirth = document.getElementById("dob");
const todaysDate = new Date();
const actualDOB = todaysDate - dateOfBirth;

console.log("Your actual age is "+ actualDOB);