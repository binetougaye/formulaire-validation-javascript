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
console.log(check1.checked, check2.checked);

// 
const firstNameError = document.getElementById("firstNameError")
const lastNameError = document.getElementById("lastNameError")
const mailError = document.getElementById("mailError")
const checkError = document.getElementById("checkError")
const messageError = document.getElementById("messageError")
const consentError = document.getElementById("consentError")
function validateForm(e) {
    e.preventDefault()
    console.log(check1.checked);

    if (firstName.value && lastName.value && emailAdress.value && check2.checked && message.value && consentCheck.checked) {
        showToast()
    } else if (firstName.value === "") {
        firstNameError.textContent = "Firstname is required"
    } else if (lastName.value === "") {
        lastNameError.textContent = "Lastname is required"
    } else if (emailAdress.value === "") {
        mailError.textContent = "Email is required"
    } else if (!(check1.checked || check2.checked)) {
        checkError.textContent = "test"
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
