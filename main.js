console.log('Sanity Check');

$(document).ready(function() {
  console.log('DOM is ready');
  createCars();
  // makeBoard(players.length);

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
  do {
    carColor = prompt('Pick a color:\nRed\nOrange\nYellow\nGreen\nBlue\nPurple');
    if (carColor !== null) {
    carColor = carColor.trim().toLowerCase();
    switch (carColor) {
      case 'red':
        break;
      case 'orange':
        break;
      case 'yellow':
        break;
      case 'green':
        break;
      case 'blue':
        break;
      case 'purple':
        break;
      case '':
        break;
      }
      console.log(carColor);
    }
  }
  while ((carColor !== 'red') && (carColor !== 'orange') && (carColor !== 'yellow') && (carColor !== 'green') && (carColor !== 'blue') && (carColor !== 'purple') && (carColor !== null) && (carColor !== ''));
  players.push(CarFactory(carColor));
}

function CarFactory(color) {
  var car = Object.create(Car);
  car.name = 'Player ' + (players.length + 1);
  car.color = color;
  car.position = 0;
  car.track = players.length;
  return car;
}

var Car = {
  move: function() {
    this.position++;
    drawPlayers();
    if (this.position === 23) {
      winMessage();
    }
  }
}

function winMessage() {
  console.log(this.name + ' won');
}

function drawPlayers() {
  $('.grid').empty();
  for (player of players) {
    $('.row:eq(' + player.track + ') > .track > .grid').eq(player.position).append("<div class='game-piece'></div>");
    $('.game-piece').eq(player.track).css('background-color', player.color);
  }
}



