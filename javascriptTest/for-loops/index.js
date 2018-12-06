windows.onload = () =>{
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () =>{
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, i);
    }
}
