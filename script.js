//Function to randomly output rock paper scissors
//create a function called "getComputerChoice" that will randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  //I will need a variable called result of type string, with an initial value of empty
  let result = "";
  //Create a variable to store the random number between 0 and 3(not inclusive) to index into the array
  random = Math.floor(Math.random() * 3);
  //I will need a variable called answers that stores a set of string values
  const answers = ["Rock", "Paper", "Scissors"];
  //store of the values in answers into result after being randomly picked
  result = answers[random];
  return result;
}

//Create function to get human input
function getHumanChoice() {
  //Create a variable named input that will store the string inputted by the human
  let input = prompt("Rock, Paper, Scissors?: ");
  //Capitalize the first character and lowercase the rest
  input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  //check if the answer inputted is valid
  if (input === "Paper") {
    return input;
  } else if (input === "Rock") {
    //Create function to get human input
    return input;
  } else if (input === "Scissors") {
    return input;
}
}

function playGame() {
  let humanSelection = "";
  let computerSelection = "";
  let keepGoing = 5;
  let humanScore = 0;
  let computerScore = 0;

  let playRound = function (humanChoice, computerChoice) {
    /*
    Win conditions:
    Paper beats rock
    Rock beats scissors
    Scissors beats Paper
  
    If both throw the same thing, it is a tie
  
    Otherwise if computer throws 
    */
    //if computerChoice equals paper and human choice equals rock, PC wins. Else, human choice wins..increment points accordingly
    if (computerChoice == "Paper" && humanChoice == "Rock") {
      console.log("You lose! Paper beats Rock");
      computerScore = ++computerScore;
    } else if (computerChoice == "Rock" && humanChoice == "Paper") {
      console.log("You win! Paper beats Rock");
      humanScore = ++humanScore;
    }
    //if computerChoice equals rock and human choice equals scissors, PC wins. Else, human choice wins..increment points accordingly
    if (computerChoice == "Rock" && humanChoice == "Scissors") {
      console.log("You lose! Rock beats Scissors");
      computerScore = ++computerScore;
    } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
      console.log("You win! Rock beats scissors");
      humanScore = ++humanScore;
    }
    //if computerChoice equals scissors and human choice equals paper, PC wins. Else, human choice wins..increment points accordingly
    if (computerChoice == "Scissors" && humanChoice == "Paper") {
      console.log("You lose! Scissors beats Paper");
      computerScore = ++computerScore;
    } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
      console.log("You win! Scissors beats Paper");
      humanScore = ++humanScore;
    }
    //if both options equals each other, it is a tie
    if (computerChoice == humanChoice) {
      console.log("It's a tie!");
    }
  };

  while (keepGoing != 0) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    //checks to make sure a valid answer is inputted
    if((humanSelection === "Rock") || (humanSelection === "Paper") || (humanSelection === "Scissors"))
    {
        playRound(humanSelection, computerSelection);
        keepGoing = keepGoing - 1;
    }
    else{
        console.log("You need to enter a valid answer. Restart the game");
        return;
    }
  }

  console.log(humanScore);
  console.log(computerScore);
  if(humanScore > computerScore){
    console.log("Congrats, you beat the computer!")
  }
  else{
    console.log("You lose, The computer beat you!")
  }
}

playGame();
