/*
$(window).on('load',function(){
    $('#myModal').modal('show');
});
*/
$(function () {
    $('#datetimepicker10').datetimepicker({
        inline: true,
        viewMode: 'days',
        format: 'DD/MM/YYYY'
    });
});

$('#bookBtn').on('click', function () {
  if(times.length > 0){
    var $btn = $(this).button('loading')
    // business logic...
    //$btn.button('reset')
  }
  })

  $('#court1Btn').on('click', function () {
    BootstrapDialog.show({
        title: 'Court 1 Preview',
        message: '<img src="imgs/Courtview.jpeg" alt="..." class="img-rounded">',
        draggable: true
    });
    $('.bootstrap-dialog-draggable').css('background-color','#3f337b');
    })

  var times = [];

$("#times tr").each(function(r){
    var row = r;
    $("td", this).each(function(d){
        var cell = d;
        $(this)
            .data("rowIndex", row)
            .data("cellIndex", cell)
            .click(function(){
              if(jQuery.inArray( cell, times ) > -1){
                console.log("in array, make white");
                $(this).css({'background':''});
                var index = times.indexOf(cell);
                times.splice(index, 1);
                if(times.length < 1) {
                  $("#bookBtn").addClass("disabled")
                }
              }
              else if (times.length < 3){
                    $(this).css({'background':'#ecc834'});
                    times.push(cell);
                    console.log(times);

                    $("#bookBtn").removeClass("disabled")
                } else {
                  BootstrapDialog.show({
                      title: 'Max Time Selected',
                      message: 'It appears you are trying to book more time than your current privileges allow! Are you are attempting to book an event?  Please contact a GPHC member of staff for any bookings exceeding a total of 3 hours at a time.',
                      draggable: true,
                      type: BootstrapDialog.TYPE_DANGER
                  });
                }
              })
    });
});
