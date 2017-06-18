$(document).ready(function() {

    function printNumber(number) {
      var placeholder = document.getElementById('placeholder')
      placeholder.innerHTML = number;
    }


    var button = document.getElementById('button');

    button.onclick = function() {
      var outcome = dice.roll();
      printNumber(outcome);

    };


  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
});
//Prints dice roll to the page
