const consoleLog = document.querySelector('#consoleLog');
const alertCommand = document.querySelector('#alert');
const promptCommand = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Пример использования команды console.log');
})

alertCommand.addEventListener('click', () => {
    alert('Пример использования команды alert');
})

promptCommand.addEventListener('click', () => {
    alert('Пример использования команды prompt');
})