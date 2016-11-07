$(document).ready(function() {
  numPlayers = prompt('How many players will be playing?');
  for (var idx = 0; idx < numPlayers; idx++) {
    createCars();
  }
    
  makeBoard(players.length);
  drawPlayers();
  countClicks();

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
    $('.track').append("<div class='col-md-1 grid'></div>");
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
  car.clicks = 0;
  car.wins = 0;
  return car;
}

var Car = {
  move: function() {
    this.position++;
    drawPlayers();
  }
}

function checkPositions() {
  var winners = [];
  for (player of players) {
    if (player.position === 23) {
      winners.push(player);
    }
  }
  if (winners.length === 1) {
    winMessage(winners[0]);
  } else if (winners.length > 1) {
    alert('This race was a tie.');
  }
}

function winMessage(piece) {
  alert(piece.name + ' won');
  piece.wins++;
  resetGame();
  drawPlayers();
}

function drawPlayers() {
  $('.grid').empty();
  for (player of players) {
    $('.row:eq(' + player.track + ') > .track > .grid').eq(player.position).append("<div class='game-piece'></div>");
    $('.game-piece').eq(player.track).css('background-color', player.color);
  }
}

function countClicks() {
  $(document).on('keyup', function(event) {
    switch (event.key) {
      case 'w':
        players[0].clicks++;
        moveCar(players[0]);
        break;
      case 'ArrowUp':
        players[1].clicks++;
        moveCar(players[1]);
        break;
    }
  })
}

function moveCar(player) {
  if ((player.clicks % 1 === 0) && (player.clicks > 0)) {
    player.move();
  }
  checkPositions();
}

function resetGame() {
  for (player of players) {
    player.position = 0;
    player.clicks = 0;
  }
}

