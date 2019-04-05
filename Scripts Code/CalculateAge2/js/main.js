
//object literal to hold key value pair data
var john = {
    name: 'James',
    yearOfBirth: 1988,
    job: 'Marketer'
};

//person function expression (constructor function) to hold values
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Using the person objects prototype to add a method for calculating the year.
Person.prototype.calculateAge  = function() {
    var currentYear = new Date().getFullYear();
    console.log(currentYear - this.yearOfBirth);
};

// invoked values
var james = new Person('James', 1991, 'Marketer');
var mary = new Person('mary', 1970, 'artist');
var ted = new Person('ted', 1940, 'retired');

//invoke calculateAge method on the person object
james.calculateAge();
mary.calculateAge();
ted.calculateAge();