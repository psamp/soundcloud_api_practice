// //when the document is fully loaded, then run this. allows us to move code to top of page

$(document).ready( function() {

  var $trackList = $("#tracks");
  var trackTitle, trackImage, imageHolder;

  rocktracks.forEach( function(track) {
    
  trackTitle = "<p>" + track.title + "</p>";
  trackImage = '<img src = "' + track.artwork_url +'">';
  trackHolder = "<li>" + trackTitle + trackImage + "</li>";
  
  $trackList.append(trackHolder);
  });

});