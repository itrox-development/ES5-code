
//Code wrapped in an IIFE to prevent code from accessing the global scope

(function(){

//invoke age calcualtion function
calculateAge(1985);

//calculate age 
function calculateAge(year) {

//assighn current year to variable
var currentYearInt = new Date().getFullYear();
//log the difference between the persons year and the current year
    console.log(currentYearInt - year);
    console.log(this);
}

// object literal to hold key value pair data
var jack = {
    name: 'jack',
    yearOfBirth: 1990,
    calculateAge: function() {
        //points to the jack object
        console.log(this);
        var currentYearInt = new Date().getFullYear();
        console.log(currentYearInt - this.yearOfBirth);
        // Nested anonymous function
        function innerFunction() {
             /*points to the global object (To prevent this you type var shareThisKeyword = this; in the calculateAge method and re use that variable here/)
               Then both this keyword variables would point to the jack object
             */
            console.log(this);
        }
        innerFunction();
    }
}

jack.calculateAge();

//new object literal for new person
var jamie = {
    name: 'jamie',
    yearOfBirth: 1984
};


jamie.calculateAge = jack.calculateAge;
jamie.calculateAge();


})();
