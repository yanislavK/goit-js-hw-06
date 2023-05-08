const categoriesRef = document.querySelector(`#categories`)
// console.log(categoriesRef)
const liCategoriesRef = categoriesRef.querySelectorAll(`li.item`)
console.log(`Number of categories:`, liCategoriesRef.length);


liCategoriesRef.forEach(item => {
    const ulHeading = item.querySelector(`h2`)
    const ulItem = item.querySelectorAll(`li`)
    console.log(
    `Category: ${ulHeading.textContent}. 
Elements: ${ulItem.length}`
    );
})
