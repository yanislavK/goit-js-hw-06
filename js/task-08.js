// const form = document.querySelector(`.login-form`);
// const inputs = form.querySelectorAll(`input`);


// function onFormSubmit(event) {
// let isValid = true;
//   event.preventDefault();
//   inputs.forEach(input => {
//     if (!input.value) {
//       isValid = false;
//       event.preventDefault();
//       alert('Please fill out all fields');
//     }
//   });
//   if (isValid) {
//     for (let [name, value] of formData) {
//       data[name] = value;
//     }
//   }
  
//   const formData = new FormData(event.currentTarget);
//   const data = {};
  
//  for (let [name, value] of formData) {
//    data[name] = value;
//   }
//   console.log(data)
//   event.currentTarget.reset();
// }



// form.addEventListener(`submit`,onFormSubmit)


const form = document.querySelector(`.login-form`);
const inputs = form.querySelectorAll(`input`);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      alert('Please fill out all fields');
    }
  });

  if (isValid) {
    for (let [name, value] of formData) {
      data[name] = value;
    }
    console.log(data);
    event.currentTarget.reset();
  }
}

form.addEventListener(`submit`, onFormSubmit);

