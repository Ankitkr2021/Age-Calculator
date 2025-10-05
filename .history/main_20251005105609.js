const dateOfBirth = document.getElementById("dob");
const todaysDate = new Date();

const actualDOB = todaysDate - dateOfBirth;
console.log(actualDOB);