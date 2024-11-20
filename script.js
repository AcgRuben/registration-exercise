// Every input should be accompanied by a label and they must be connected. That means that if you click on the label, the corresponding input gets selected ( focus ). You are NOT! allowed to use the for attribute on the label in combination with the id attribute on the input in order to solve this.

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("#myBtn");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password");


submitBtn.disabled = true;

labels.forEach((label, i) => {
  label.addEventListener("click", () => {
    inputs[i].focus();
  });
});

// All of the inputs must be mandatory, meaning that you shouldn't be able to submit the form if one of the inputs is missing a value. Create a function that checks if every input has a value. Make the submit button disabled from the beginning and invoke this function every time you validate the password inputs

function validateInputs() {
  for (let input of inputs) {
    if (input.value.trim() === "") {
      submitBtn.disabled = true;
      return;
    }
  }
  submitBtn.disabled = false;
}

inputs.forEach((input) => {
  input.addEventListener("input", validateInputs);
});

validateInputs();

//The password must be atleast 8 characters long. If the password is not of length, the input should receive appropriate styling to visualize this for the user. When the passwords is long enough the styling returns to normal ( or to an affirmative state if you would like ).


function validatePassword() {
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add("rednotice");
  } else {
    passwordInput.classList.remove("rednotice");

  }
}


passwordInput.addEventListener("input", validatePassword);

// The confirm password must be validated to be identical as the password. If that's not the case, the input should receive appropriate styling to visualize this for the user, much like the previous part.

function confirmPasswordMatch() {
  if (confirmPasswordInput.value != passwordInput.value) {
    confirmPasswordInput.classList.add("rednotice");
    submitBtn.disabled = true;
  } else {
    confirmPasswordInput.classList.remove("rednotice");
    submitBtn.disabled = false;
  }
}

confirmPasswordInput.addEventListener("input", confirmPasswordMatch);

// There must be a submit event in the application. When the form is submitted all of the data should be presented in an object like this:


const form = document.getElementById('registrationForm');



form.addEventListener('submit', function (event) {

  event.preventDefault();


  const registrationData = {
    name: form.name.value,
    username: form.username.value,
    email: form.email.value,
    password: form.password.value
  };


  console.log(registrationData);


});
