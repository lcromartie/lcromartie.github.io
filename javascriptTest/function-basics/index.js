window.onload = () => {
    const simpleFunction = document.getElementById('simple-function');
    const functionParameters = document.getElementById('function-parameters');
    const functionReturn = document.getElementById('function-return');

    function simpleFunction() {
        console.log('simple-function');
        simpleFunction.textContent = "functions should consist of statements designed to perform a single task";

    function functionParameters() {
        console.log('function-parameters');
        functionParameters.textContent = "Many functions take parameters"
    }
    
    function functionReturn() {
        console.log('function-returns');
        functionReturn.textContent = "Many functions return values";
    }

        
        functionCalls.onclick = () => {
           const simpleFunction = document.getElementById('simple-function');
           simpleFunction.textContent = "functions should consist of statements designed to perform a single task"
        }
}
}
