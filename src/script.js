const btnSubmit = document.getElementById("btn-submit");

const txtName = document.getElementById("txt-name");
const txtLastname = document.getElementById("txt-lastname");
const txtEmail = document.getElementById("txt-email");
const txtPassword = document.getElementById("txt-password");

const errorName = document.getElementById("error-name");
const errorLastname = document.getElementById("error-lastname");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

function sendForm() {
    if (txtName.value == "") {
        showError(txtName, errorName, "First Name cannot be empty", "");
        addImgError(1);
    }
    if (txtLastname.value == "") {
        showError(txtLastname, errorLastname, "Last Name cannot be empty", "");
        addImgError(3);
    }
    if (txtEmail.value == "") {
        showError(txtEmail, errorEmail, "Looks like this is not an email", "email@example/com");
        addImgError(5);
    }
    if (txtPassword.value == "") {
        showError(txtPassword, errorPassword, "Password cannot be empty", "");
        addImgError(7);
    }
}

function addImgError(num) {
    const imgError = document.querySelector(`body > section.form > div.card > div:nth-child(${num}) > img`);
    imgError.style.display = "inline";
}

function removeImgError(num) {
    const imgError = document.querySelector(`body > section.form > div.card > div:nth-child(${num}) > img`);
    imgError.style.display = "none";
}

function showError(input, errorElement, message, placeholder) {
    errorElement.innerHTML = message;
    input.style.border = "1px solid hsl(0, 100%, 74%)";
    input.placeholder = placeholder;
    input.value = placeholder;
    input.style.color = "hsl(0, 100%, 74%)";
}

function cleanMessages() {
    errorName.innerHTML = "";
    errorLastname.innerHTML = "";
    errorPassword.innerHTML = "";
    errorEmail.innerHTML = "";
    removeImgError(1);
    removeImgError(3);
    removeImgError(5);
    removeImgError(7);
}

function reset(elementInput) {
    elementInput.style.border = "1px solid hsl(246, 25%, 77%)";
    elementInput.style.color = "hsl(249, 10%, 26%)";
}

txtName.addEventListener("blur", () => {
    reset(txtName);
    cleanMessages();
});
txtLastname.addEventListener("blur", () => {
    reset(txtLastname)
    cleanMessages();
});
txtEmail.addEventListener("blur", () => {
    reset(txtEmail)
    cleanMessages();
});
txtPassword.addEventListener("blur", () => {
    reset(txtPassword)
    cleanMessages();
});

btnSubmit.addEventListener("click", sendForm);