document.addEventListener(
  "DOMContentLoaded",
  function() {
    var rollButton = document.getElementById("roll");
    var holdButton = document.getElementById("hold");
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var playerOnTurn = player1;
    function updateCurrentPointsOfPlayerOnTurn() {
      document.querySelector(
        "section.active>div.current p:last-child"
      ).textContent =
        playerOnTurn.currentRoundScore;
    }
    function updateTotalPointsOfPlayerOnTurn() {
      document.querySelector("section.active>p.score").textContent =
        playerOnTurn.totalScore;
    }
    function changePlayerOnTurn() {
      var leftSection = document.querySelector("section#left");
      var rightSection = document.querySelector("section#right");
      playerOnTurn = playerOnTurn == player1 ? player2 : player1;
      if (leftSection.classList.contains("active")) {
        leftSection.classList.remove("active");
        rightSection.classList.add("active");
      } else {
        rightSection.classList.remove("active");
        leftSection.classList.add("active");
      }
    }

    rollButton.addEventListener(
      "click",
      function() {
        playerOnTurn.rollDice();
        dice1.src = `assets/images/dice-${playerOnTurn.currentThrow[0]}.png`;
        dice2.src = `assets/images/dice-${playerOnTurn.currentThrow[1]}.png`;
        dice1.style.visibility = "initial";
        dice2.style.visibility = "initial";
        updateCurrentPointsOfPlayerOnTurn();
        if (!playerOnTurn.isOnTurn) {
          changePlayerOnTurn();
        }
      },
      false
    );
    holdButton.addEventListener(
      "click",
      function() {
        playerOnTurn.hold();
        updateTotalPointsOfPlayerOnTurn()
        changePlayerOnTurn();
      },
      false
    );
  },
  false
);
