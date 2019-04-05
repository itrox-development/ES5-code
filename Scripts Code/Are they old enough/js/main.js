

/*Checks the age of an individual to see if they are old enough*/


function CheckAge(years) {
    //empty arrays
    var ages = [];
    var completeAges = [];
    //loop through the years array
    for (var i = 0; i < years.length; i++) {
        //add into ages array the current age
        ages[i] = 2018 - years[i];
    }

//conditions for under and over 18. Pushing results into completeAges array.
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Individual ' + (i + 1) + ' is ' + ages[i] + ' years of age, so is old enough.');
            completeAges.push(true);
        } else {
            console.log('Individual ' + (i + 1) + ' is ' + ages[i] + ' years of age, so is NOT YET old enough.');
            completeAges.push(false);
        }
    }
    
    //return completeAges array
    return completeAges;
}

var years = [1980, 1975, 1999, 2011, 1965];
var full_1 = CheckAge(years);
var full_2 = CheckAge([2008, 1910, 1988]);