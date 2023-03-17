const inputText = document.querySelector('input');
const textOutput = document.querySelector('#duplicateField');

inputText.addEventListener('keydown', () => {
    textOutput.textContent = inputText.value;
})

document.querySelector('button').addEventListener('click', () => {
    console.log(inputText.value);
    inputText.value = "";
    textOutput.textContent = "";
})