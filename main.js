console.log('Sanity Check');

$(document).ready(function() {
  console.log('DOM is ready');
  makeBoard();
});

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
    $('.track').append("<div class='col-md-1 grid'>Grid</div>");
  }
};

function makeBoard() {
  makeRow();
  makeTrack();
  makeGrid();
}