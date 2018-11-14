function loader() {
    const getNamesButton = document.getElementById('get-name');

    getNamesButton.onclick = function() {
        return this.firstName
    }
}

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