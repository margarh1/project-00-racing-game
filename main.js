console.log('Sanity Check');

$(document).ready(function() {
  console.log('DOM is ready');
  createCars();
  makeBoard(players.length);

});

var players = [];

function makeRow(rows) {
  for (var idx = 0; idx < rows; idx++) {
    $('.container').append("<div class='row'></div>");
  }
}

function makeTrack(tracks = 2) {
  for (var idx = 0; idx < tracks; idx++) {
    $('.row').append("<div class='col-md-6 track'></div>");
  }
};

function makeGrid(grids = 12) {
  for (var idx = 0; idx < grids; idx++) {
    if (idx === 11) {
      $('.track').append("<div class='col-md-1 grid' value='finish'></div>");
    } else {
      $('.track').append("<div class='col-md-1 grid'></div>");
    }
  }
};

function makeBoard(numRows) {
  makeRow(numRows);
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
  car.track = players.length;
  car.gridPosition = $('.grid').eq(car.position);
  car.gridText = car.gridPosition.text().toLowerCase();
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

function drawPlayers() {
  for (var idx = 0; idx < players.length; idx++) {
    $('.row:eq(' + idx + ') > .track > .grid').eq(0).append("<div class='game-piece'></div>");
    $('.game-piece').eq(idx).css('background-color', players[idx].color);
  }
}

