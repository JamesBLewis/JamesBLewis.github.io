$(document).ready(function(){
  $('.navbar-brand').on('click', function(event) {
    console.log("clicked");
    $( ".navbar-collapse" ).addClass( "show" );
  });
});
