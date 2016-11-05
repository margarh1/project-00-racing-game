console.log('Sanity Check');

$(document).on('ready', function() {
  makeBoard();
});

function makeRow() {
  for (var idx = 0; idx < 2; idx++) {
    $('.container').append("<div class='row'>Row</div>");
  }
}

function makeTrack() {
  for (var idx = 0; idx < 2; idx++) {
    $('.row').append("<div class='col-md-6 track'>This is a track</div>");
  }
};

function makeGrid() {
  for (var idx = 0; idx < 12; idx++) {
    $('.track').append("<div class='col-md-1 grid'>Grid</div>");
  }
};

function makeBoard() {
  makeRow();
  makeTrack();
  makeGrid();
}