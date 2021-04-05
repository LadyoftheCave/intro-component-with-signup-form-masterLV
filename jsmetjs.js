let firstName = document.getElementById("txtFirstName");
let lastName = document.getElementById("txtLastName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let form = document.querySelector("form");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,4}$/;

function validateInput() {
    // check username is empty
    if (firstName.value.trim() === '') {
        onError(firstName, "First Name cannot be empty")
    } else {
        onSuccess(firstName);
    }

    if (lastName.value.trim() === '') {
        onError(lastName, "Last Name cannot be empty")
    } else {
        onSuccess(lastName);
    }

    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty");
    } else {

        if (!email.value.match(pattern)) {
            onError(email, "Looks like this is not an email")
        } else {
            onSuccess(email);
        }

    }

    if (pwd.value.trim() === '') {
        onError(pwd, "Password cannot be empty")
    } else {
        onSuccess(pwd);
    }

}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = "";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

