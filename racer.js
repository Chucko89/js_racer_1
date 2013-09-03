var p1_pos = 0
var p2_pos = 0

var update_player_position = function(player, position) {
  $('#' + player + '_strip td').removeClass("active");
  $('#' + player + '_strip td:nth-child(' + position +')').addClass("active");
};



var isFinished = function(player) {

  if ($('#' + player + '_strip td:last-child').hasClass('active'))
  {
    alert(player + " won!!!!!")
    update_player_position('player1', 1)
    update_player_position('player2', 1)
  }
}

$('body').keyup(function(e) {
  console.log(e.which)
  if (e.which == 80){
    // advance player
    update_player_position('player1', (p1_pos += 1));
    // here
    isFinished('player1')
  } else if (e.which == 81)
  {
    // advance player 2
    update_player_position('player2', (p2_pos += 1));
    // here
    isFinished('player2')
  }
});

