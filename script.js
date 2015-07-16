SC.initialize({
    client_id:'5a1e5d1d5c8db75f8ebd766580e30c32'
});

$(document).ready(function() {
  var searchButton =$("#searchButton");
  searchButton.click(function(){
  var userChoice = $("#gensearch").val();

  SC.get('/tracks', {genres: userChoice}, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>')
      .text( 
      'Track Title: ' + track.title + ' || ' +
      ' Genre: ' + track.genre + ' || ' +
      ' Listen: ' + track.permalink_url));
       });
    });
  });
});
