$("#button").on("click", function(){
  game();
});


function game(){
$(".container").empty();
var input = prompt("Please enter: rock, paper, or scissors");
var takenInput = input.toLowerCase();

var computerOptions = ["rock", "paper", "scissors"]
var computerInput = computerOptions[Math.floor(Math.random()*computerOptions.length)];

if (takenInput === computerInput ) {
  $(".container").append("Tie game");
}
else if (takenInput === "rock" && computerInput === "paper"){
  $(".container").append("You lose... the computer played " + computerInput);
}
else if (takenInput === "rock" && computerInput === "scissors"){
  $(".container").append("You win! The computer played " + computerInput);
}
else if (takenInput === "scissors" && computerInput === "paper"){
  $(".container").append("You win! The computer played " + computerInput);
}
else if (takenInput === "scissors" && computerInput === "rock"){
  $(".container").append("You lose... the computer played " + computerInput);
}
else if (takenInput === "paper" && computerInput === "scissors"){
  $(".container").append("You lose...  the computer played " + computerInput);
}
else if (takenInput === "paper" && computerInput === "rock"){
  $(".container").append("You win! the computer played " + computerInput);
}
else if (takenInput !== computerInput){
  alert("Please only enter rock, paper or scissors");
}


};
