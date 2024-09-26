const signUp = document.getElementById("sign-up");
const success = document.getElementById("success");

const form = document.forms[0];
const mailSignUp = form["mail"];
const btnSignUp = form["register"];
const btnSuccess = document.querySelector("#success button");

const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSignUp.addEventListener("click", (e)=>{
  e.preventDefault();
  
  const error = form.querySelector("label>span.error");
  const value = mailSignUp.value;
  
  if (reg.test(value)) {
    hide(signUp);
    hide(error);
    show(success);
    
    mailSignUp.value = "";
    success.querySelector("#confirmMail").innerHTML = value;
  } else {
    mailSignUp.classList.add("error");
    show(error);
  }
});

mailSignUp.addEventListener("keyup", ()=>{
  mailSignUp.classList.remove("error");
});

btnSuccess.addEventListener("click", ()=>{
  show(signUp);
  hide(success);
})

/**
 * @param {Element} element
 */
function show(element) {
  element.classList.remove("invisible");
}

/**
 * @param {Element} element
 */
function hide(element) {
  element.classList.add("invisible");
}
