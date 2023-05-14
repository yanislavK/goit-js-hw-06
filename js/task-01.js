const ul = document.querySelector(`#categories`)
const items = [...ul.children]
console.log(`Number of categories:`,items.length);

items.forEach(item => {
  const heading = item.firstElementChild
  
  const li = item.querySelectorAll(`li`)
  console.log(`Category:${heading.textContent} Elements:${li.length} `);
})
