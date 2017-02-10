'use strict';

// question 1 - 5 correct variables
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

//Questions 1-5
var responseOne = confirm('Hello, would you like to take a quiz?');
if(responseOne){
  console.log(promtOne);
  alert(promtOne);
}else{
  console.log(promtTwo);
  alert(promtTwo);
}

var quizResponseOne = prompt('Please answer with Y or N.  Does Isak have a dog?');
if(quizResponseOne.toUpperCase() === 'Y'){
  console.log(correctOne);
  alert(correctOne);
}else{
  console.log(wrongOne);
  alert(wrongOne);
};

var quizResponseTwo = prompt('Please answer with Y or N.  Does Isak have a disease?');
if(quizResponseTwo.toUpperCase() === 'Y'){
  console.log(correctTwo);
  alert(correctTwo);
}else{
  console.log(wrongTwo);
  alert(wrongTwo);
}

var quizResponseThree = prompt('Please answer with Y or N. Does Isak brush his teeth every day?');
if(quizResponseThree.toUpperCase() === 'Y'){
  console.log(correctThree);
  alert(correctThree);
}else{
  console.log(wrongThree);
  alert(wrongThree);
}

var quizResponseFour = prompt('Does Isak have all of his toes?');
if(quizResponseFour.toUpperCase() === 'Y'){
  console.log(correctFour);
  alert(correctFour);
}else{
  console.log(wrongFour);
  alert(wrongFour);
}

var quizResponseFive = prompt('Does Isak ride motorcycles?');
if(quizResponseFive.toUpperCase() === 'Y'){
  console.log(correctFive);
  alert(correctFive);
}else{
  console.log(wrongFive);
  alert(wrongFive);
}

// //Question 6 variables
var numberGuessCorrect = 'Wow, you actually got it!';
var numberGuessHigh = 'Nope, too high.';
var numberGuessLow = 'Nope, too low.';
var guessHigh = (quizResponseSix >= 26);
var guessLow = (quizResponseSix <= 24);
var questionSeven;
//
// //for loop VERSION question 6
//   //Ok, so quizResponseSix on line 54 equals a string.  to convert the string to a real number,use the parseInt fx. then redefine the variable to equal a real number.
for(var i = 0; i < 4; i++){
  var quizResponseSix = prompt('Guess my favorite number. Hint: it\'s between 0 and 50.  You have 4 tries.');
  quizResponseSix = parseInt(quizResponseSix, 10);
  if(quizResponseSix === 25){
    console.log(numberGuessCorrect);
    alert(numberGuessCorrect);
    break;
  }else if(quizResponseSix >= 26) {
    console.log(numberGuessHigh);
    alert(numberGuessHigh);
  }else if(quizResponseSix <= 24) {
    console.log(numberGuessLow);
    alert(numberGuessLow);
  };
  if(i === 3){
    console.log('better luck next time!');
  }
};

// //question 7 variables
var states = ['Nevada', 'Georgia', 'North Carolina'];
var arrayLength = states.length;
var maximumTries = 6;
var questionSeven;
var isCorrect = false;

//question 7

for(var tries = 0; tries < maximumTries; tries++){
  questionSeven = prompt('Try to guess a state I have lived in other than Washington');
  for(var i = 0; i < states.length; i++){
    if(questionSeven === states.toUpperCase()[i]){
      isCorrect = true;
      break;
    }
  }
  if(isCorrect === true){
    console.log('Good work!');
    alert('Good Work!');
    break;
  }else{
    console.log('Keep Trying');
    alert('Wrong.');
  }
};
