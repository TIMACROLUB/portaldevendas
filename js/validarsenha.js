let password = document.getElementById("senha")
let confirm_password = document.getElementById("confirmasenha");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setAttribute('style', 'background-color: #FAD4D4')
  } else {
    //confirm_password.setCustomValidity('');
    confirm_password.removeAttribute('style')
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;