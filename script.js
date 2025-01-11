//Function to randomly output rock paper scissors
//create a function called "getComputerChoice" that will randomly return "rock", "paper", or "scissors"
function getComputerChoice(){
    //I will need a variable called result of type string, with an initial value of empty
    let result = '';
    //Create a variable to store the random number between 0 and 3(not inclusive) to index into the array
    random = Math.floor(Math.random()*3);
    //I will need a variable called answers that stores a set of string values
    const answers = ["rock","paper","scissors"];
    //store of the values in answers into result after being randomly picked
    result = answers[random];
    return answers[random];
}
console.log(getComputerChoice());
