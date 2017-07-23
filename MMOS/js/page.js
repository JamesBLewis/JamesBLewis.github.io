$(document).ready(function(){
  $('.navbar-brand').on('click', function(event) {
    console.log("clicked");
    $( ".navbar-collapse" ).addClass( "show" );
  });
});

function speak(obj) {
  $(obj).articulate('speak');
};
function stop() {
  $().articulate('stop');
};

  $( ".stop" ).hide();

  $(".speak").click(function() {
      speak('body');
     $( ".speak" ).hide();
     $( ".stop" ).show();
  });


  $(".stop").click(function() {
    stop();
    $( ".stop" ).hide();
    $( ".speak" ).show();
  });
