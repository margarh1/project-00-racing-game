console.log('Sanity Check');

$(document).ready(function() {
  console.log('DOM is ready');
  makeBoard();

});

var players = [];

function makeRow() {
  for (var idx = 0; idx < 2; idx++) {
    $('.container').append("<div class='row'></div>");
  }
}

function makeTrack() {
  for (var idx = 0; idx < 2; idx++) {
    $('.row').append("<div class='col-md-6 track'></div>");
  }
};

function makeGrid() {
  for (var idx = 0; idx < 12; idx++) {
    $('.track').append("<div class='col-md-1 grid'></div>");
  }
};

function makeBoard() {
  makeRow();
  makeTrack();
  makeGrid();
}

function createCars() {
  carColor = prompt('Pick a color:\nRed\nOrange\nYellow\nGreen\nBlue\nPurple');
  players.push(CarFactory(carColor));
}

function CarFactory(color) {
  var car = Object.create(Car);
  car.name = 'Player ' + (players.length + 1);
  car.color = color;
  car.position = 0;
  car.gridText = $('.grid').eq(car.position).text().toLowerCase();
  return car;
}

var Car = {
  move: function() {
    if (this.gridText === 'finish') {
      winMessage();
    } else {
      this.position++;
    }
  }
}

function winMessage() {
  console.log(this.name + ' won');
}

