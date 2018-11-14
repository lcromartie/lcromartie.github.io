const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

myObject.middleName = 'barfoo';

console.log(myObject.firstName);
console.log(myObject)['firstName']);