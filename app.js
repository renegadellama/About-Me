'use strict';

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
  console.log('Yes, Isak practices good hygiene.');
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
