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

    $("#buton").click(function() {
      var outcome = dice.roll();
      printNumber(outcome);

      var scorred = dice.roll();
      outPutNumber(scorred);

      var result = dice.roll();
      puttedNumber(result);
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
