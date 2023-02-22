let emailInput = document.getElementById("email");
let emailValidationMessage = document.getElementById("emailValidationMessage");

// Email Validation 
emailInput.addEventListener("input", function(event) {
  let email = event.target.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailValidationMessage.textContent = "Invalid email address.";
  } else {
    emailValidationMessage.textContent = "";
  }
});

let nameInput = document.getElementById("name");
let nameValidationMessage = document.getElementById("nameValidationMessage");

// name field Validation
nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value;
    
    // Check if input is empty or contains non-alphabetic characters
    if (!inputValue || !/^[a-zA-Z]+$/.test(inputValue)) {
      nameValidationMessage.textContent = "alphabets only";
    } else {
      nameValidationMessage.textContent = "";
    }
});

// Radio Button Validation.
const maleRadioButton = document.getElementById("male");
const femaleRadioButton = document.getElementById("female");
let ageInput = document.getElementById("age");
ageInput.addEventListener("input", validateGenderSelection)

function validateGenderSelection() {
  // Check if either radio button is checked
  if(ageInput){
    if (!maleRadioButton.checked && !femaleRadioButton.checked) {
        document.getElementById("genderValidationMessage").textContent = "Please select a gender";
    } else {
        document.getElementById("genderValidationMessage").textContent = "";
    }
}
}


const hobbiesCheckboxes = document.querySelectorAll("input[type='checkbox'][name='hobbies']");

// checkbox selection Validation

hobbiesCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", validateInterestsSelection);
});

function validateInterestsSelection() {

  // Check if at least one checkbox is checked
    const isChecked = Array.from(hobbiesCheckboxes).some((checkbox) => checkbox.checked);
    if (!isChecked) {
        document.getElementById("hobbiesValidationMessage").textContent = "Please select at least one Hobbies";
    } else {
        document.getElementById("hobbiesValidationMessage").textContent = "";
    }
}

let countryInput = document.getElementById("country");
countryInput.addEventListener("change", function(event){
    let country = countryInput.value;
    if(country == ""){
        document.getElementById("countryValidationMessage").textContent = "Please select Country";
    }else{
        document.getElementById("countryValidationMessage").textContent = "";
    }
})
