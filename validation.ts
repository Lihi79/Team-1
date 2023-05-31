const submitButton = document.querySelector(
  ".btnField__singUp"
) as HTMLButtonElement;
submitButton.onclick = (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpass = document.getElementById("cpass").value;
  localStorage.setItem("userName", userName);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", password);
  localStorage.setItem("Cpassword", cpass);
  if (userName == "" || email == "" || password == "" || cpass == "") {
    alert("input field has no value");
  } else {
    if (password !== cpass) {
      alert("password not matching");
    } else {
      alert("registration succeeded");
    }
  }
};
