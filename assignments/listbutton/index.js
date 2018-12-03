window.onload = () => {
const userInput = document.getElementById('list-data');
const setTextButton = document.getElementById('set-text');
const listbutton = document.getElementById('add-to-list'); 

setTextButton.onclick = () => {
    userInput.value = 'The first item for my list';
    listButton.onclick = () => {
        const myList = document.getElementById('add-to-list');
        elfCode.appendToList(myList, userInput.value);
    }
 }
}

