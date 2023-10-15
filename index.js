
// animation

let inputUser = document.getElementById("usernameInput");
let inputPass = document.getElementById("passwordInput");

let pUser = document.getElementById("p-usernameInput");
let pPass = document.getElementById("p-passwordInput");

inputUser.addEventListener("focus", function() {
  pUser.style.fontSize = "25px"; 
});

inputUser.addEventListener("blur", function() {
    pUser.style.fontSize = "20px"; 
});

inputPass.addEventListener("focus", function() {
    pPass.style.fontSize = "25px"; 
});
  
inputPass.addEventListener("blur", function() {
      pPass.style.fontSize = "20px"; 
});

let socialIcons = document.querySelectorAll('.social');

socialIcons.forEach(function(icon, index) {
    icon.style.animationDelay = (index * 0.5) + 's';
});