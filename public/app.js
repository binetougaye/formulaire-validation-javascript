// get elements
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const emailAdress = document.getElementById("emailAddress")
const check1 = document.getElementById("check1")
const check2 = document.getElementById("check2")
const message = document.getElementById("message")
const consentCheck = document.getElementById("check3")
const submitBtn = document.getElementById("submit")
const form = document.querySelector("form")

// 
const firstNameError = document.getElementById("firstNameError")
const lastNameError = document.getElementById("lastNameError")
const emailError = document.getElementById("emailError")
const checkError = document.getElementById("checkError")
const messageError = document.getElementById("messageError")
const consentError = document.getElementById("consentError")

function validateForm(e) {



    e.preventDefault()

    let isValid = true
    // Validations des champs
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "The first name field is required"
        isValid = false
    }
    if (lastName.value.trim() === "") {
        lastNameError.textContent = "The last name field is required"
        isValid = false
    }
    if (emailAdress.value.trim() === "") {
        emailError.textContent = "The email field is required"
        isValid = false
    }
    if (!(check1.checked && check2.checked)) {
        checkError.textContent = "Please select both checkboxes"
        isValid = false
    }
    if (message.value.trim() === "") {
        messageError.textContent = "Message is required"
        isValid = false
    }
    if (!consentCheck.checked) {
        consentError.textContent = "You must agree to the terms"
        isValid = false
    }
    if (isValid) {
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        checkError.textContent = "";
        messageError.textContent = "";
        consentError.textContent = "";
        showToast()
    }


}

// Toast
function showToast() {
    Toastify({
        text: "Formulaire soumis avec succès!",
        duration: 3000, // Durée en millisecondes
        gravity: "top", // "top" ou "bottom"
        position: "right", // "left", "center" ou "right"
        backgroundColor: "green",
    }).showToast();
}

form.addEventListener("submit", validateForm)
