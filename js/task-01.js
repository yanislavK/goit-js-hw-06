// liCategoriesRef.forEach(item => {
//   const ulHeading = item.querySelector(`h2`);
//   const ulItem = item.querySelectorAll(`li`);
//   console.log(
//     `Category: ${ulHeading.textContent}.
// Elements: ${ulItem.length}`
//   );
// });

const categoriesRef = document.querySelector('#categories');
const liCategoriesRef = Array.from(categoriesRef.children);
console.log(`Number of categories:`, liCategoriesRef.length);

liCategoriesRef.forEach(item => {
  const ulHeading = item.firstElementChild;

  const ulItem = item.querySelectorAll('li');
  console.log(`Category: ${ulHeading.textContent}. Elements: ${ulItem.length}`);
});
