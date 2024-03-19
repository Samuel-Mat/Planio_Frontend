let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let submitBtn = document.getElementById("submitBtn");
let errorBox = document.getElementById("errorBox");

let jwt = sessionStorage.getItem("token");

let firstTryCheck = true;

function toggleSubmitBtn() {
    let emailInput = email.value;
    let passwordInput = password.value;

    if(firstTryCheck == false) {
        errorBox.style.right = "0";
        errorBox.classList.add("flyOut");
        errorBox.classList.remove("flyIn");
    }

    if(emailInput != "" && passwordInput != "") {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "rgb(0, 64, 255)";
        submitBtn.style.boxShadow = "0 0 7px 7px rgba(0, 64, 255, 0.2)";
        submitBtn.style.cursor = "pointer";
    } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "rgb(38, 57, 114)";
        submitBtn.style.boxShadow = "none";
        submitBtn.style.cursor = "unset";
    }

    submitBtn.onclick = function () {
        login(emailInput, passwordInput);
    };
}

function login(emailInput, passwordInput) {
    fetch("URL", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            credentials: "same-origin",
        },
        body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
        }),
    })
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
        data = "ErrorMsg";
        if (data == "ErrorMsg") {
          jwt = null;
          errorBox.style.right = "-27vw";
          errorBox.classList.remove("flyOut");
          errorBox.classList.add("flyIn");
          firstTryCheck = false;
        } else {
          jwt = `Bearer ${data}`;
          sessionStorage.setItem("token", jwt);
          window.location.href = "home.html";
        }
      });
}