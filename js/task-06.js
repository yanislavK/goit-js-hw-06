const input = document.querySelector(`#validation-input`);

function validateInputOnBlur(event) {
  if (input.getAttribute(`data-length`) == input.value.length) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  }
  else {
    input.classList.add(`invalid`);
     input.classList.remove(`valid`);
  } 
  
}

input.addEventListener(`blur`,validateInputOnBlur)