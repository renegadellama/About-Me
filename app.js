'use strict';
// /*
var responseOne = confirm('Hello, would you like to take a quiz?');
if(responseOne){
  console.log('Awesome! Lets get started!');
}else{
  console.log('Too bad, starting anyways.');
}

var quizResponseOne = prompt('Please answer with Y or N.  Does Isak have a dog?');
if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('Of course he does not have a dog.  Dogs have rabies.');
}else{
  console.log('Yessir!');
};

var quizResponseTwo = prompt('Please answer with Y or N.  Does Isak have a disease?');
if(quizResponseTwo.toUpperCase() === 'Y'){
  console.log('Ummm, no.');
}else{
  console.log('Correct.  Isak is diesease free.');
}

var quizResponseThree = prompt('Please answer with Y or N. Does Isak brush his teeth every day?');
if(quizResponseThree.toUpperCase() === 'Y'){
  console.log('Yes, Isak practices good oral hygiene.');
}else{
  console.log('Wrong.');
}

var quizResponseFour = prompt('Please answer with Y or N. Does Isak have a girlfriend?');
if(quizResponseFour.toUpperCase() === 'Y'){
  console.log('No. Isak is a single man.');
}else{
  console.log('This is true.');
}

var quizResponseFive = prompt('Please answer with Y or N. Is Isak good at coding?');
if(quizResponseFive.toUpperCase() === 'Y'){
  console.log('Not yet he isn\'t.');
}else{
  console.log('Well, technically that is true.');
}
// //Question 6 variables
var numberGuessCorrect = 'Wow, you actually got it!';
var numberGuessHigh = 'Nope, too high.';
var numberGuessLow = 'Nope, too low.';
var guessHigh = (quizResponseSix >= 26);
var guessLow = (quizResponseSix <= 24);
var questionSeven;
//
// //for loop VERSION q 6
for(var i = 0; i < 4; i++){
  var quizResponseSix = prompt('Guess my favorite number. Hint: it\'s between 0 and 50.  You have 4 tries.');
//   //Ok, so quizResponseSix on line 54 equals a string.  to convert the string to a real number,use the parseInt fx. then redefine the variable to equal a real number.
  quizResponseSix = parseInt(quizResponseSix, 10);
  if(quizResponseSix === 25){
    console.log(numberGuessCorrect);
    break;
  }else if(quizResponseSix >= 26) {
    console.log(numberGuessHigh);
  }else if(quizResponseSix <= 24) {
    console.log(numberGuessLow);
  };
  if(i === 3){
    console.log('better luck next time!');
  };

//
// //ALL MY ORIGINAL BS Q 6 CODE.  DID IT AS AN ELSE IF INSTEAD OF A LOOP.
// // question 6, 4 tries total
// // var quizResponseSix = prompt('Guess my favorite number. Hint: it\'s between 0 and 50.  You have 4 tries.');
// // quizResponseSix = parseInt(quizResponseSix, 10);
// // if(quizResponseSix === 25){
// //   console.log(numberGuessCorrect);
// // }else if(quizResponseSix >= 26) {
// //   console.log(numberGuessHigh);
// // }else if(quizResponseSix <= 24) {
// //   console.log(numberGuessLow);
// // };
//
// // if (quizResponseSix !== 25){
// //   var guessTwoWrong = prompt('3 tries left.');
// // } if(guessTwoWrong === 25){
// //   console.log(numberGuessCorrect) , (questionSeven);
// // }else if(guessTwoWrong >= 26){
// //   console.log(numberGuessHigh);
// // }else if(guessTwoWrong <= 24){
// //   console.log(numberGuessLow);
// // };
// //
// // if (quizResponseSix !== 25){
// //   var guessThreeWrong = prompt('Only 2 tries left.');
// // } if(guessThreeWrong === 25){
// //   console.log(numberGuessCorrect) , (questionSeven);
// // }else if(guessThreeWrong >= 26){
// //   console.log(numberGuessHigh);
// // }else if(guessThreeWrong <= 24){
// //   console.log(numberGuessLow);
// // };
// //
// // if (quizResponseSix !== 25){
// //   var guessFourWrong = prompt('Look, I don\'t want to freak you out or anything, but if you don\'t get this last guess right, terrible things will happen.');
// // }if(guessFourWrong === 25) {
// //   console.log(numberGuessCorrect), (questionSeven);
// // }else{
// //   console.log('Ya blew it.  It ws 25, obviously.  Seriously, what is wrong with you?!');
// // };
// // //End of question 6

// //q'n 7 variables
var states = ['Nevada', 'Georgia', 'North Carolina'];
var arrayLength = states.length;
var maximumTries = 6;
var questionSeven;
var isCorrect = false;

for(var tries = 0; tries < maximumTries; tries++){
questionSeven = prompt('Try to guess a state I have lived in other than Washington');
  for(var i = 0; i < states.length; i++){
    if(questionSeven === states[i]){
      isCorrect = true;
      break;
    }
  }
  if(isCorrect === true){
    console.log('Good work');
    break;
  }else{
    console.log('keep trying');
  }
}
};
