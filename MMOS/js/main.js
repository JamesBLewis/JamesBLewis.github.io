var vid = document.getElementById("bgvid");
$( ".scope" ).hide();
$( ".definitions" ).hide();
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  console.log("Mobile Detected");
} else {
  $( "#gif" ).replaceWith( '<video poster="img/hd1080.png" id="bgvid" class="fade video" playsinline autoplay loop muted><source src="Anti-piracy-opt.mp4" type="video/mp4"></video>' );
  function setPlaySpeed() {
  vid.playbackRate = 0.5;
  }
  var myvid = $('#bgvid')[0];
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    scroll > 70 ? myvid.pause() : myvid.play()
  })
}

$(document).ready(function(){
    // very inificient make better
		$('#scope').on('click', function(event) {
    if ( $( ".scope" ).is( ":hidden" ) ) {
    $( ".definitions" ).slideUp("fast");
    $( ".scope" ).slideDown( "slow" );
  } else {
    $( ".scope" ).slideUp("fast");
  }
  });

  $('#definitions').on('click', function(event) {
    console.log('clicked');
    if ( $( ".definitions" ).is( ":hidden" ) ) {
    $( ".scope" ).slideUp("fast");
    $( ".definitions" ).slideDown( "slow" );
    } else {
    $( ".definitions" ).slideUp("fast");
    }
  });
  // --> $(this).attr('name')
  $("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#Overview").offset().top -50
    }, 600);
});
});
function speak(obj) {
  $(obj).articulate('speak');
};
