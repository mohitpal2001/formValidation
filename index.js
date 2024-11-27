const email = document.getElementById("exampleInput");
const password = document.getElementById("Password1");
const button = document.getElementById("btn-1");
const emailerror = document.getElementById("emailerror");
const passworderror = document.getElementById("passworderror");
const emailsuccess = document.getElementById("emailsuccess");
const passwordsuccess = document.getElementById("passwordsuccess");

function validatemail() {
  const emailvalue = email.value;
  if (
    emailvalue.length < 3 ||
    !emailvalue.includes("@") ||
    !emailvalue.includes(".")
  ) {
    emailerror.innerText =
      "Email must be at least 3 characters long and contain '@' and '.'";
    emailsuccess.innerText = "";
  } else {
    emailerror.textContent = "";
    emailsuccess.textContent = "All good to go!";
  }
}

function validatepassword() {
  const passwordvalue = password.value;
  if (passwordvalue.length <= 8) {
    passworderror.textContent = "Password must be more than 8 characters long";
    passwordsuccess.textContent = "";
  } else {
    passworderror.textContent = "";
    passwordsuccess.textContent = "All good to go!";
  }
}

function onclickbutton() {
  if (
    emailsuccess.textContent === "All good to go!" &&
    passwordsuccess.textContent === "All good to go!"
  ) {
    const confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      email.value = "";
      password.value = "";
      emailerror.textContent = "";
      passworderror.textContent = "";
      emailsuccess.textContent = "";
      passwordsuccess.textContent = "";
      window.location.reload();
    }
  } else {
    alert("Please fix the errors before submitting!");
  }
}
