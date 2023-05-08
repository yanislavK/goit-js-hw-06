const form = document.querySelector(`.login-form`);
const inputs = form.querySelectorAll(`input`);

form.addEventListener(`submit`,onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(value,name)
        
    })
    inputs.forEach((input) => {
      if (!input.value) {
        event.preventDefault();
        alert("Please fill out all fields");
      }
    });
}
