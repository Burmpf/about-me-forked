'use strict';

let username;
let correctGuess = 0;
while(username === undefined || username === null || username === ''){
  username = prompt('What is your name?');
  if(username === undefined || username === null || username === ''){
    alert('I am not asking for much! Please try again!');
  } else {
    alert('Nice to meet you, ' + username + '!');
  }
}

// Questions 1-5 --------------------------------------------------

let questionArray = ['1. Did I grow up in Missouri before moving to Florida in high school?', '2. Did I study Aerospace Engineering in college...even though I did not enjoy it as much as I enjoyed college football and Air Force ROTC?', '3. Did I join the Air Force and fly on the E-3 AWACS as an Air Battle Manager and deploy to the Middle East 3 times in support of operations against ISIS?', '4. Is my wife\'s name Kayla and do we have 2 sons, Jacob (age 3) and Ethan (age 1)?', '5. Did I propose to my wife while skydiving because that\'s how my parents met?'];
let responseArray=['I actually was born in Missouri and lived there for 15 years before moving to Florida.', 'I actually did not really enjoy Aerospace Engineering and spent most of my time with Air Force ROTC and cheering on the Gators.', 'I actually am an Air Battle Manager on the E-3 AWACS and deployed 3 times to the Middle East.', 'My wife\'s name is Kayla and we have 2 sons, Jacob and Ethan.', 'My parents met while skydiving, so I decided to propose to my wife while skydiving.'];
let answerArray = ['y','y','y','y','y'];
let userAnswer = [];

function quizQuestions(){

  for(let i = 0; i < questionArray.length; i++){
    while(userAnswer[i] !== 'y' && userAnswer[i] !== 'n'){
      let rawAnswer = prompt(`${questionArray[i]}`).toLowerCase();
      if(rawAnswer === 'y' || rawAnswer === 'yes'){
        userAnswer[i] = 'y';
      } else if(rawAnswer === 'n' || rawAnswer === 'no'){
        userAnswer[i] = 'n';
      } else {
        userAnswer[i] = rawAnswer;
      }
      console.log(`Question ${i+1} Answer: ${userAnswer[i]}`);
      if(userAnswer[i] === answerArray[i]){
        alert(`That is correct, ${username}!`);
        correctGuess++;
      } else if(userAnswer[i] === 'n'){
        alert(`${responseArray[i]}`);
      } else {
        alert('Please reply with either "yes","y","no", or "n".');
      }
    }
    console.log(`Correct Guesses: ${correctGuess}/${i+1}`);
  }
}
quizQuestions();
// Question 6 -----------------------------------------------------------------------

let correctNumber = Math.floor(Math.random() * 10);
console.log(`Random Number: ${correctNumber}`);
let guessNumber;
let attemptsRemaining = 3;
let correct = false;
while(attemptsRemaining >= 0 && correct === false){
  guessNumber = parseInt(prompt('6. Guess a random number between 0-9.'));
  console.log('Random Answer: ' + guessNumber);
  if(guessNumber === correctNumber){
    alert(`That is correct, ${username}! The random number was ${correctNumber}.`);
    correctGuess++;
    correct = true;
  } else if(guessNumber > correctNumber && guessNumber <= 9){
    alert(`Your guess was too high! You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  } else if(guessNumber < correctNumber && guessNumber >= 0){
    alert(`Your guess was too low! You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  } else if(guessNumber < 0 || guessNumber > 9){
    alert(`Your guess was not between 0-9! You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  } else {
    alert(`Please reply with a valid number. You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  }
}
if(correct === false){
  alert(`I'm sorry, ${username}...the random number was ${correctNumber}.`);
}
console.log(`Correct Guesses: ${correctGuess}/6`);

// Question 7 -----------------------------------------------------------------------

let correctArray = ['oklahoma', 'florida', 'missouri'];
let guessArray;
attemptsRemaining = 5;
correct = false;
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
    alert(`That is correct, ${username}! I've lived in ${correctArray[0]}, ${correctArray[1]}, and ${correctArray[2]}.`);
    correctGuess++;
  } else {
    alert(`That is incorrect. You have ${attemptsRemaining} attempts remaining.`);
    attemptsRemaining--;
  }
}
if(correct === false){
  alert(`I'm sorry, ${username}...I've lived in ${correctArray[0]}, ${correctArray[1]}, and ${correctArray[2]}.`);
}
console.log(`Correct Guesses: ${correctGuess}/7`);

// Results -----------------------------------------------------------------------

alert(`${username}, you answered ${correctGuess}/7 questions correctly. I hope you learned more about me!`);
