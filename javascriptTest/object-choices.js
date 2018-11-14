function loader() {
    const getNamesButton = document.getElementById('get-name');
    const functionButton = document.getElementById('getfunctionObject');

    getNamesButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;

        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;


    }
    console.log(functionObject.getName());
    funtionButton.onclick = functionObject;
}
 
window.onload = loader;
 
//Key value pairs
//Coma
const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

myObject.middleName = 'barfoo';
myObject.getFullName = function() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);

function FunctionObject() {
    const firstName = 'sue';
    const lastName = 'jones';
}

const functionObject = () => {
    console.log('my function object');

    const getName = () => {
        return 'Function object';
    }

    functionObject.prototype.getFullName = () => {
        return 'This is the full name';
    }

    console.log(getName());
}