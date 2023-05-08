const inputRef = document.querySelector(`#validation-input`);
function validateInputOnBlur(event) {
  if (inputRef.getAttribute("data-length") < inputRef.value.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove(`invalid`);
  }
}


inputRef.addEventListener("blur", validateInputOnBlur);

