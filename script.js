// GUESS THAT NUMBER
const enterNumText = `Please enter a number greater than zero`;

let restartGame = true;

let rangeNum;

let randomNum;

let attempts;

let guess;

let playAgain;

alert(`Welcome to GUESS THAT NUMBER! Please click OK to start the game`);

while (restartGame){

  rangeNum = prompt(`Please enter a maximum number for the range:`);
  rangeNum = parseInt(rangeNum);

  while (rangeNum <= 1 || !rangeNum){
    rangeNum = prompt(`Please enter a number greater than 1`);
    rangeNum = parseInt(rangeNum);
  }

  // alert(rangeNum);

  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  // alert(randomNum);

  
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  
  while (attempts < 1 || !attempts || attempts >= rangeNum){
    attempts = prompt(`Please enter a number from 1 to ${rangeNum - 1}`);
    attempts = parseInt(attempts);
  }

  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

  while (true){

   if (guess === '0810'){
    alert('The number was ${randomNum}');
   }

    guess = parseInt(guess);

    while (!guess || guess < 1 || guess > rangeNum){
      guess = prompt(`Please enter a guess from 1 to ${rangeNum}.`);
      guess = parseInt(guess);
    }

    attempts--;

    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;

     
    } else if (attempts === 0) {
      alert(`Sorry, but you have run out of attempts :(\nThe number was ${randomNum}`);
      break;

    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);

    } else if (guess > randomNum) {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left.`);
    }
    
    // break;
  }

  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  while (true){

    if (playAgain === `N`){

      alert(`Thanks for playing!`);
      restartGame = false;
      break;

    } else if (playAgain === `Y`){
      break;

    } else {
      playAgain = prompt(`Please enter Y or N:`);
    }

    // break;
  }
  
  // break;
}