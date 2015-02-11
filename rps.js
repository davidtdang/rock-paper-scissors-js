$("#rock").on("click", function(){
  rock();
});

$("#paper").on("click", function(){
  paper();
});

$("#scissors").on("click", function(){
  scissors();
});


function rock(){
$(".container").empty();

var computerOptions = ["rock", "paper", "scissors"]
var computerInput = computerOptions[Math.floor(Math.random()*computerOptions.length)];

if (computerInput === "rock ") {
  $(".container").append("Tie game");
}
else if (computerInput === "paper"){
  $(".container").append("You lose... the computer played " + computerInput);
}
else if (computerInput === "scissors"){
  $(".container").append("You win! The computer played " + computerInput);
}
};

function paper(){
$(".container").empty();

var computerOptions = ["rock", "paper", "scissors"]
var computerInput = computerOptions[Math.floor(Math.random()*computerOptions.length)];

if (computerInput === "paper") {
  $(".container").append("Tie game");
}
else if (computerInput === "scissors"){
  $(".container").append("You lose... the computer played " + computerInput);
}
else if (computerInput === "rock"){
  $(".container").append("You win! The computer played " + computerInput);
}
};

function scissors(){
$(".container").empty();

var computerOptions = ["rock", "paper", "scissors"]
var computerInput = computerOptions[Math.floor(Math.random()*computerOptions.length)];

if (computerInput === "scissors") {
  $(".container").append("Tie game");
}
else if (computerInput === "paper"){
  $(".container").append("You win! The computer played " + computerInput);
}
else if (computerInput === "rock"){
  $(".container").append("You lose... the computer played " + computerInput);
}
};
