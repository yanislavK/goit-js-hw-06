const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const valueRef = document.querySelector(`#value`);

let value = 0

decrement.addEventListener("click", () => {
  value -= 1
  valueRef.textContent = value
})

increment.addEventListener('click', () => {
  value += 1;
  valueRef.textContent = value;
});