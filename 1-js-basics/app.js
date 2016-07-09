function Person(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
}

var person = new Person('David');
var prince = new Person('Prince');

console.log(person);