const calculate = document.getElementById("submitBtn"); 

 calculate.addEventListener("click", function() {
      const dobValue = document.getElementById("dob").value;

      if (!dobValue) {
        alert("Please select your date of birth!");
        return;
      }

      const birthDate = new Date(dobValue);
      const todaysDate = new Date();

      let age = todaysDate.getFullYear() - birthDate.getFullYear();
      const monnthDiff =todaysDate.getMonth() - birthDate.getMonth();
        
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

    console.log("Your actual age is "+ actualDOB);
    alert("Your actual age is " + age + " years.");

});