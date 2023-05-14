function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  input: document.getElementById(`controls`).querySelector(`input`),
  createButton: document.getElementById(`controls`).querySelector('button[data-create]'),
  destroyButton: document.getElementById(`controls`).querySelector('button[data-destroy]')
};

refs.createButton.addEventListener('click', createBoxes)
refs.destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount)
{
  let inputValue = parseInt(refs.input.value, 10);
  let size = 30;
  for (let i = 0; i < inputValue; i++){
    const div = document.createElement(`div`);
    div.style.width = size +'px';
    div.style.height = size +'px';
    div.style.backgroundColor = getRandomHexColor();
    div.setAttribute('id', `created-div`);
    document.body.appendChild(div);
    size+=10
  }

}

function destroyBoxes() {
  const createdDivs = document.querySelectorAll(`#created-div`);
  createdDivs.forEach(div => div.parentNode.removeChild(div))
  refs.input.value = '';
  
}

