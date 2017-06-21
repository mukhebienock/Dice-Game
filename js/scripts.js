$(document).ready(function() {

    function printNumber(number) {
      var placeholder = document.getElementById('placeholder')
      placeholder.innerHTML = number;
    }

    function outPutNumber(number) {
      var scoreA = document.getElementById('scoreA')
      scoreA.innerHTML = number;
    }

    function puttedNumber(number) {
      var scoreB = document.getElementById('scoreB')
      scoreB.innerHTML = number;
    }

    var yourScore = 0;
    var myScore = 0;

    $("#buton").click(function() {
      var outcome = dice.roll();
      printNumber(outcome);

      var scorred = dice.roll();
      yourScore += dice.roll();
      outPutNumber(yourScore);

      var result = dice.roll();
      myScore += dice.roll();
      puttedNumber(myScore);
    })


  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
});
//Prints dice roll to the page
