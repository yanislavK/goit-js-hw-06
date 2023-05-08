const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector(`#ingredients`)
const liEl = ingredients.map((ingredient) => {
  const li = document.createElement(`li`)
  li.textContent = ingredient
  li.classList.add = (`item`)
  return li 
})

ulEl.append(...liEl)

