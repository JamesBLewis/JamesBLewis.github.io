if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  console.log("Mobile Detected");
  $( "#dnav" ).hide();
  $( "#mnav" ).show();
}


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
