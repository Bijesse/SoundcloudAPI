SC.initialize({
    client_id:'5a1e5d1d5c8db75f8ebd766580e30c32'
});

$(document).ready(function() {

  SC.get('/tracks', {genres: 'punk'}, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.permalink_url + track.title + ' - ' + track.genre));
    });
  });
});
