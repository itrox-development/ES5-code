//Using a function declation
function game() {
    // random number assigned to score variable
    var score = Math.random() * 10;
     console.log("Is the number greater than or equal to 5? " + score);
     console.log("The number is " + score);
     //checks boolean expression
    console.log(score >= 5);
   
}
game();


//Using an IIFE version
(function () {
    var score = Math.random() * 10;
     console.log("Is the number greater than or equal to 5? " + score);
      console.log("The number is " + score);
    console.log(score >= 5);
})();


//Score value never evaluated for above 0. The 5 arg value is a way of cheating by fixing the evaluation number to something that always calls true! 
(function (goodLuck) {
    var score = Math.random() * 10;
     console.log("Is the number greater than or equal to 5 minus 5? " + score);
      console.log("The number is " + score);
    console.log(score >= 5 - goodLuck);
})(5);
