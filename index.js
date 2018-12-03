window.onload = () => {
    const appearanceButton = document.getElementById('appearanceAction');

    appearanceButton.onclick = () => {
        const styles = document.getElementById('styles');
        const basic =  document.getElementById('basic');

        disableStylesheet('styles');
        enableStylesheet('basic');
    }
}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
}

function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}