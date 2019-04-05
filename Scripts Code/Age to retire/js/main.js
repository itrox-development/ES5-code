
//function declaration to calculate age
function calculateAge(YOB) {
//get current year
  var theCurrentYear = new Date().getFullYear();

    var age = theCurrentYear - YOB;
    return age;
}

var ageJohn = calculateAge(1980);
var ageMike = calculateAge(1961);
var ageMary = calculateAge(1945);

// calculate retirment time
function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' gets to retire in ' + retirement + ' years.');
    } else {
        console.log(name + ' has already been retired');
    }
}

//invoke three different persons
yearsUntilRetirement('Jack', 1990);
yearsUntilRetirement('John', 1969);
yearsUntilRetirement('Lisa', 1948);