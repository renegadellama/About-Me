'use strict';

// question 1 - 5 correct variables
var score = 0;

var promtOne = ('Awesome, let\'s get started!');
var correctOne = ('Of course he doesn\'t have a dog, dogs have mange and rabies.');
var correctTwo = ('Wrong. Isak is disease free.');
var correctThree = ('Yes, Isak practices good oral hygiene.');
var correctFour = ('Yes, Isak has all of his toes.');
var correctFive = ('Yes, but he has a tendency to crash them.');

// question 1-5 incorrect variables
var promtTwo = ('Too bad, we\'re doing this.');
var wrongOne = ('Correct, he does not own a dog.');
var wrongTwo = ('Correct, Isak does not have a disease.');
var wrongThree = ('Wrong.');
var wrongFour = ('Wrong, Isak has all of his toes.');
var wrongFive = ('Wrong, Isak loves motorcycles.');

var questionOne = ('Please answer with Y or N.  Does Isak have a dog?');
var questionTwo = ('Please answer with Y or N.  Does Isak have a disease?');
var questionThree = ('Please answer with Y or N. Does Isak brush his teeth every day?');
var questionFour = ('Does Isak have all of his toes?');
var questionFive = ('Does Isak ride motorcycles?');

var askingQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var correctResponses = [wrongOne, wrongTwo, correctThree, correctFour, correctFive];
var wrongResponses = [correctOne, correctTwo, wrongThree, wrongFour, wrongFive];
var correctAnswers = ['N', 'N', 'Y', 'Y', 'Y'];

var numberGuessCorrect = 'Wow, you actually got it!';
var numberGuessHigh = 'Nope, too high.';
var numberGuessLow = 'Nope, too low.';
var questionSeven;

var states = ['Nevada', 'Georgia', 'North Carolina'];
var arrayLength = states.length;
var maximumTries = 6;
var questionSeven;
var isCorrect = false;

function answer(i){
  var response = prompt(askingQuestions[i]);
  if (response.toUpperCase() === correctAnswers[i]){
    alert(correctResponses[i]);
    score++;
    console.log(score);
  } else {
    alert(wrongResponses[i]);
  }
}
function numberGuess(i){
  for(var i = 0; i < 4; i++){
    console.log(i);
    var guessHigh = (quizResponseSix >= 26);
    var guessLow = (quizResponseSix <= 24);
    var quizResponseSix = prompt('Guess my favorite number. Hint: it\'s between 0 and 50.  You have 4 tries.');
    quizResponseSix = parseInt(quizResponseSix, 10);
    if(quizResponseSix === 25){
      console.log(numberGuessCorrect);
      alert(numberGuessCorrect);
      score++;
      break;
    } else if(quizResponseSix >= 26) {
      console.log(numberGuessHigh);
      alert(numberGuessHigh);
    }else if(quizResponseSix <= 24) {
      console.log(numberGuessLow);
      alert(numberGuessLow);
    }
    if(i === 3){
      console.log('better luck next time!');
      alert('better luck next time!');
    }
  }
}
function stateGuess(i){
  for(var tries = 0; tries < maximumTries; tries++){
    console.log(i);
    questionSeven = prompt('Try to guess a state I have lived in other than Washington');
    for(var i = 0; i < states.length; i++){
      if(questionSeven === states[i]){
        isCorrect = true;
        break;
      }
    }
    if(isCorrect === true){
      console.log('Good work!');
      alert('Good Work!');
      score++;
      break;
    }else{
      console.log('Keep Trying');
      alert('Wrong.');
    }
  }
}

var responseOne = confirm('Hello, would you like to take a quiz?');
if(responseOne){
  console.log(promtOne);
  alert(promtOne);
}else{
  console.log(promtTwo);
  alert(promtTwo);
}

for(var i = 0; i < 5; i++){
  answer(i);
}
numberGuess(i);
stateGuess(i);
alert('You scored ' + score + ' out of 7.');
