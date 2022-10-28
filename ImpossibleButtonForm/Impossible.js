
//Const declarations
const movingButton = document.querySelector(".movingButton");
const movingButtonArea = document.querySelector("#buttonMovingArea");
const userNameInput = document.querySelector('#UserNameInput');
const passwordInput = document.querySelector('#passwordInput');

//Run necessary functions
movingButtonArea.addEventListener('mouseover', validateForm)
movingButtonArea.addEventListener('mouseover', inputColor)

//Move button function
function Random() {
  movingButton.addEventListener('mousedown', Random);
  movingButton.addEventListener('mouseup', Random);
  movingButton.addEventListener('mouseover', Random);
  movingButton.addEventListener('click', Alert);
  //userName.classList.add('changeInputColor')
 
  var RandomX = Math.random() * 69 + "%";
  var RandomY = Math.random() * 74 + "%";
  
  movingButton.style.left = RandomX;
  movingButton.style.top = RandomY;
}

//Check if inputs are empty
function validateForm() {
  const userName = document.forms["login"]["UserName"].value;
  const password = document.forms["login"]["password"].value;

  if(userName == "" || password == "") { return Random() } else { return Clean();}
}

//Change input border-color if they are empty
function inputColor(){
  const userName = document.forms["login"]["UserName"].value;
  const password = document.forms["login"]["password"].value;
  if (userName == "") {
      userNameInput.classList.add("changeInputColor");
    } else if (password == "") {
      passwordInput.classList.add("changeInputColor");
    }
}

//Clean all the info added if inputs ate not empty and make the button blue
function Clean() {
  movingButton.removeEventListener('mousedown', Random);
  movingButton.removeEventListener('mouseup', Random);
  movingButton.removeEventListener('mouseover', Random);
  movingButton.removeEventListener('click', Alert);
  movingButton.removeAttribute("style");
  userNameInput.classList.remove("changeInputColor")
  passwordInput.classList.remove("changeInputColor");
  movingButton.classList.add("blueButton");
}

//Alert for when someone manages to click the button
function Alert() {
  var total = document.getElementById("total");
  var start = document.getElementById("startbutton");
  alert("Wow, you really got me. Now go on and fix te missing/wrong information to log in.");
  total.value = total.value * 1 + 1;
  start.style.display = "flex";
  div.style.display = "none";
}


