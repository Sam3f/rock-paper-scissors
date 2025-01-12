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


//Create function to get human input
function getHumanChoice(){
    //Create a variable named input that will store the string inputted by the human
    let input = prompt("Rock, Paper, Scissors?: ");
    //Capitalize the first character and lowercase the rest 
    input = input.charAt(0).toUpperCase()+input.slice(1).toLowerCase();
    //check if the answer inputted is valid
    if(input === "Paper"){
        return input;
    }
    else if(input === "Rock"){
        return input;
    }
    else if(input === "Scissors"){
        return input;
    }
    else{
        return "Enter a valid answer!"
    }
}