window.onload = () => {
    const listbutton = document.getElementById('run-for-loop');
     
    } 
    listbutton.onclick = () => {
        const myList = document.getElementById('my-list');

        for (var i=1;i<=3;i++) {
            document.write("cars" +i +"<br>");
        }
    }
        
