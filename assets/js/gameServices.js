function throwDice() {
  return [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
}

function Player(name) {
  this.name = name;
  this.opponent = null;
  this.totalScore = 0;
  this.currentRoundScore = 0;
  this.currentThrow = [];
  this.isOnTurn = false;
}
Player.prototype.rollDice = function () {
  if (!this.isOnTurn) {
    throw new Error("Player" + this.name + " is not marked to be on turn");
  }
  this.currentThrow = throwDice();
  console.log(this.name + " hvarli " + this.currentThrow);
  if (this.currentThrow.indexOf(1) > -1) {
    console.log("toz hvarli edno- vsicko prekluchva");
    this.isOnTurn = false;
    this.opponent.isOnTurn = true;
    this.currentRoundScore = 0;
    return;
  }
  this.currentRoundScore += this.currentThrow[0] + this.currentThrow[1];
};
Player.prototype.hold = function () {
  this.totalScore += this.currentRoundScore;
  this.currentRoundScore = 0;
  this.isOnTurn = false;
  this.opponent.isOnTurn = true;
};

//simulation of a game
var player1 = new Player("pesho");
var player2 = new Player("gosho");
player1.opponent = player2;
player2.opponent = player1;
player1.isOnTurn = true;

// var i = 0
// while (player1.totalScore < 100 && player2.totalScore < 100 && i++ < 200 ){
//   player1.rollDice();
//   while (player1.isOnTurn) {
//     if (Math.random() < 0.1) {
//       player1.rollDice();
//     } else {
//       player1.hold();
//     }
//   }
//   console.log(player1.name + " svarshi hoda i sq ima " + player1.totalScore + " tochki");

//   player2.rollDice();
//   while (player2.isOnTurn) {
//     if (Math.random() < 0.4) {
//       player2.rollDice();
//     } else {
//       player2.hold();
//     }
//   }
//   console.log(player2.name + " svarshi hoda i sq ima " + player2.totalScore + " tochki");
// }