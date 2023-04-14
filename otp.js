function digitValidate(inputField) {
  // Validate input field to allow only digits
  var regex = /[^0-9]/gi;
  inputField.value = inputField.value.replace(regex, '');
}

function tabChange(nextField) {
  // Move focus to next input field when a digit is entered
  var currentField = event.target.id;
  if (event.target.value.length == 1) {
    if (nextField <= 4) {
      document.getElementById("inp" + nextField).focus();
    }
  }
}

function validateOTP() {
  // Get user input and concatenate the digits
  var userOTP = document.getElementById("inp1").value +
                document.getElementById("inp2").value +
                document.getElementById("inp3").value +
                document.getElementById("inp4").value;
  console.log("User entered OTP: ", userOTP);
  console.log("Generated OTP: ", otp);

  // Compare user input with the generated OTP
  if (userOTP == otp) {
    alert("OTP validation successful!");
    window.location.replace("successfulPayment.html");
  } else {
    alert("Incorrect OTP. Please try again.");
  }
}
