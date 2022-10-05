'use strict';

let username;
let correctGuess = 0;
while(username === undefined || username === null){
  username = prompt('What is your name?');
  if(username === undefined || username === null){
    alert('I am not asking for much! Please try again!');
  } else {
    alert('Nice to meet you, ' + username + '!');
  }
}

// Question 1 -----------------------------------------------------------------------

let locationAnswer;
while(locationAnswer !== 'yes' && locationAnswer !== 'y' && locationAnswer !== 'no' && locationAnswer !== 'n'){
  locationAnswer = prompt('1. Did I grow up in Missouri before moving to Florida in high school?').toLowerCase();
  console.log('Location Answer: ' + locationAnswer);
  if(locationAnswer === 'yes' || locationAnswer === 'y'){
    alert('That is correct, ' + username + '!');
    correctGuess++;
  } else if(locationAnswer === 'no' || locationAnswer === 'n'){
    alert('I actually was born in Missouri and lived there for 15 years before moving to Florida.');
  } else {
    alert('Please reply with either "yes","y","no", or "n".');
  }
}
console.log(`Correct Guesses: ${correctGuess}/1`);

// Question 2 -----------------------------------------------------------------------

let collegeAnswer;
while(collegeAnswer !== 'yes' && collegeAnswer !== 'y' && collegeAnswer !== 'no' && collegeAnswer !== 'n'){
  collegeAnswer = prompt('2. Did I study Aerospace Engineering in college...even though I did not enjoy it as much as I enjoyed college football and Air Force ROTC?').toLowerCase();
  console.log('College Answer: ' + collegeAnswer);
  if(collegeAnswer === 'yes' || collegeAnswer === 'y'){
    alert('That is correct, ' + username + '!');
    correctGuess++;
  } else if(collegeAnswer === 'no' || collegeAnswer === 'n'){
    alert('I actually did not really enjoy Aerospace Engineering and spent most of my time with Air Force ROTC and cheering on the Gators.');
  } else {
    alert('Please reply with either "yes","y","no", or "n".');
  }
}
console.log(`Correct Guesses: ${correctGuess}/2`);

// Question 3 -----------------------------------------------------------------------

let awacsAnswer;
while(awacsAnswer !== 'yes' && awacsAnswer !== 'y' && awacsAnswer !== 'no' && awacsAnswer !== 'n'){
  awacsAnswer = prompt('3. Did I join the Air Force and fly on the E-3 AWACS as an Air Battle Manager and deploy to the Middle East 3 times in support of operations against ISIS?').toLowerCase();
  console.log('AWACS Answer: ' + awacsAnswer);
  if(awacsAnswer === 'yes' || awacsAnswer === 'y'){
    alert('That is correct, ' + username + '!');
    correctGuess++;
  } else if(awacsAnswer === 'no' || awacsAnswer === 'n'){
    alert('I actually am an Air Battle Manager on the E-3 AWACS and deployed 3 times to the Middle East.');
  } else {
    alert('Please reply with either "yes","y","no", or "n".');
  }
}
console.log(`Correct Guesses: ${correctGuess}/3`);

// Question 4 -----------------------------------------------------------------------

let familyAnswer;
while(familyAnswer !== 'yes' && familyAnswer !== 'y' && familyAnswer !== 'no' && familyAnswer !== 'n'){
  familyAnswer = prompt('4. Is my wife\'s name Kayla and do we have 2 sons, Jacob (age 3) and Ethan (age 1)?').toLowerCase();
  console.log('Family Answer: ' + familyAnswer);
  if(familyAnswer === 'yes' || familyAnswer === 'y'){
    alert('That is correct, ' + username + '!');
    correctGuess++;
  } else if(familyAnswer === 'no' || familyAnswer === 'n'){
    alert('My wife\'s name is Kayla and we have 2 sons, Jacob and Ethan.');
  } else {
    alert('Please reply with either "yes","y","no", or "n".');
  }
}
console.log(`Correct Guesses: ${correctGuess}/4`);

// Question 5 -----------------------------------------------------------------------

let skydiveAnswer;
while(skydiveAnswer !== 'yes' && skydiveAnswer !== 'y' && skydiveAnswer !== 'no' && skydiveAnswer !== 'n'){
  skydiveAnswer = prompt('5. Did I propose to my wife while skydiving because that\'s how my parents met?').toLowerCase();
  console.log('Skydiving Answer: ' + skydiveAnswer);
  if(skydiveAnswer === 'yes' || skydiveAnswer === 'y'){
    alert('That is correct, ' + username + '!');
    correctGuess++;
  } else if(skydiveAnswer === 'no' || skydiveAnswer === 'n'){
    alert('My parents met while skydiving, so I decided to propose to my wife while skydiving.');
  } else {
    alert('Please reply with either "yes","y","no", or "n".');
  }
}
console.log(`Correct Guesses: ${correctGuess}/5`);

// Question 6 -----------------------------------------------------------------------

let correctNumber = 3;
let guessNumber;
let attemptsRemaining = 3;
while(attemptsRemaining >= 0 && guessNumber !== correctNumber){
  guessNumber = parseInt(prompt('6. How many brothers do I have?'));
  console.log('Brothers Answer: ' + guessNumber);
  if(guessNumber === correctNumber){
    alert(`That is correct, ${username}! I have 3 brothers.`);
    correctGuess++;
  } else if(guessNumber > correctNumber){
    alert(`Your guess was too high! You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  } else if(guessNumber < correctNumber){
    alert(`Your guess was too low! You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  } else {
    alert(`Please reply with a valid number. You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  }
}
console.log(`Correct Guesses: ${correctGuess}/6`);

// Question 7 -----------------------------------------------------------------------

let correctArray = ['oklahoma', 'florida', 'missouri'];
let guessArray;
attemptsRemaining = 5;
let correct = false;
while(attemptsRemaining >= 0 && correct === false){
  guessArray = prompt('7. Do you remember which states I have lived in? Name just one!').toLowerCase();
  console.log('State Answer: ' + guessArray);
  for(let i=0; i < correctArray.length; i++){
    if(guessArray === correctArray[i]){
      correct = true;
      break;
    }
  }
  if(correct){
    alert(`That is correct, ${username}!`);
    correctGuess++;
  } else {
    alert(`That is incorrect. You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  }
}
console.log(`Correct Guesses: ${correctGuess}/7`);

// Results -----------------------------------------------------------------------

alert(`${username}, you got answered ${correctGuess}/7 questions correctly. I hope you learned more about me!`);
