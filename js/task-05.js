const nameInputRef = document.querySelector(`#name-input`);
const nameOutputRef = document.querySelector(`#name-output`);
nameInputRef.addEventListener("input", (event) => {
    nameOutputRef.textContent = event.currentTarget.value;
    if (nameOutputRef.textContent.length === 0) {
      nameOutputRef.textContent = `Anonymous`;
    }
 
});
