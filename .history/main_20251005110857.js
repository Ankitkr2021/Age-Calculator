// const calculate = document.getElementById("submitBtn"); 

//  calculate.addEventListener("click", function() {
//       const dobValue = document.getElementById("dob").value;

//       if (!dobValue) {
//         alert("Please select your date of birth!");
//         return;
//       }

//       const birthDate = new Date(dobValue);
//       const todaysDate = new Date();

//       let age = todaysDate.getFullYear() - birthDate.getFullYear();
//       const monnthDiff =todaysDate.getMonth() - birthDate.getMonth();
        
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }

//     console.log("Your actual age is "+ actualDOB);
//     alert("Your actual age is " + age + " years.");

// });

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements by their IDs from your HTML
  const dateOfBirth = document.getElementById("dob");
  const calculate = document.getElementById("submitBtn");
  const result = document.getElementById("result");

  // Add a click event listener to the button
  calculate.addEventListener("click", function () {
    const dobValue = dateOfBirth.value;

    // Check if user selected a date
    if (!dobValue) {
      result.textContent = "⚠️ Please select your date of birth!";
      result.style.color = "red";
      return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn’t occurred yet this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Show result
    result.textContent = `🎉 Your actual age is ${age} years.`;
    result.style.color = "green";
  });
});
