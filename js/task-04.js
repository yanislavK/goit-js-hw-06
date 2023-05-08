const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let value = 0;

decrementBtn.addEventListener("click", () => {
  value -= 1;
  valueEl.textContent = value;
});

incrementBtn.addEventListener("click", () => {
  value += 1;
  valueEl.textContent = value;
});
