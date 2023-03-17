const promptCommand = document.querySelector('.link');
promptCommand.addEventListener('click', () => {
    promptCommand.textContent = prompt();
})
