const inputRef = document.querySelector(`#validation-input`);
function validateInputOnBlur(event) {
  if (inputRef.getAttribute("data-length") == inputRef.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove(`valid`);
  }
}


inputRef.addEventListener("blur", validateInputOnBlur);

