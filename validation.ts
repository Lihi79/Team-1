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
const login = document.querySelector(".login") as HTMLButtonElement;
login.onclick = (e) => {
  e.preventDefault();
  const loginName = document.getElementById("loginName").value;
  const loginPassword = document.getElementById("loginPassword").value;
  const nameUser = localStorage.getItem("userName");
  const passwordUser = localStorage.getItem("password");

  if (loginName == "" || loginPassword == "") {
    alert("input field has no value");
  } else {
    if (loginName == nameUser && loginPassword == passwordUser) {
      alert(`welcome back`);
    } else {
      alert("Something is wrong! ' try again");
    }
  }
};
