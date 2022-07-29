
//This function will be used to generate a random number
let randomNumber = function(start, range)
{
let getRandom = Math.floor((Math.random() * range) + start);
//This loop will keep running until the computer generates a number between 1 and 6
 while (getRandom > 6)
 {
    Math.floor((Math.random() * range) + start);
 }
    return getRandom

}
//This function will use the randomNumber funtion to aid with the numbers on the dice
function playGame(){
    //These variables will define what number the dice will display by selecting a random number between 1 and 6
    var die1 = (randomNumber (1,6));
    var die2 = (randomNumber(1,6));
    var sum = die1 + die2;

    //These statments will display the number defined within the variables
    document.getElementById("firstDice").innerHTML = die1;
    document.getElementById("secondDice").innerHTML = die2;
    document.getElementById("diceTotal").innerHTML=sum;

    //This if statment says that if the dice both equal 1, then you win
    if (die1 == 1 && die2 == 1)
    { 
        document.getElementById("winning").innerHTML = "Snake Eyes! YOU WIN! :)"
    }
    //This is if the sum of the dice equal 7, then you win
    else if (sum == 7)
    {
        document.getElementById("winning").innerHTML = "You got a 7 before an 11! YOU WIN! :)"
    }
    //This is if the sum of the dice equal 11, then you lose
    else if (sum ==11)
    {
        document.getElementById("winning").innerHTML = "You rolled an 11! YOU LOSE :("
    }
    //The else statement says that if the dice equal the same number, then you win
    else if (die1 == die2)
    {
        document.getElementById("winning").innerHTML = "DOUBLE - YOU WIN! :)"
    }
    //This last else statement is for when all the other statements are false, you lose
    else
    {
        document.getElementById("winning").innerHTML = "You didn't roll a 7 or a double :( YOU LOSE!"
    }
}