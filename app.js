let passBox = document.querySelector("#password");
let btn = document.querySelector("#btn");
let copyBtn = document.querySelector("#copy");

let generatePass = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{[]/<=~`[]";

  let password = "";

  const lengthOfPassword = 8;

  for (let i = 0; i < lengthOfPassword; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    console.log(password);
  }

  passBox.value = password;
};

btn.addEventListener("click", generatePass);

copyBtn.addEventListener("click", () => {
  let passwordCopy = passBox.value.trim();
  if (!passwordCopy) {
    alert("No password to copy, Please generate a password first!!");
    return;
  }

  navigator.clipboard.writeText(passwordCopy).then(() => {
    alert("Password copy to clipboard");
  });
});
