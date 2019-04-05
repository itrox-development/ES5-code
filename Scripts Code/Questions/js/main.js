

//IIFE to keep code out of the global execution context
(function() {
    //contructor function with set variables
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

//Using the question constructor functions protptype to add a new method
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

//Using the question constructor functions protptype to add a new method
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct!');

        } else {
            console.log('Incorrect, please try again')
        }
    }

    var q1 = new Question('Is development the future?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What planet are we on?',
                          ['Saturn', 'Mars', 'Earth'],
                          2);

    var q3 = new Question('The best way to decribe coding',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

//Generate random question per load
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();