$(document).ready(function() {
  $( "#quizbody" ).hide();

  $( "#start" ).click(function() {
  $(this).addClass('disabled');
  gameStart();
});

  $.get("quizData.csv", function(response) {
    var csv = response;
    var data = $.csv.toArray(csv);
  });
});

function gameStart() {
  var html = fillData(data);
  $('questions').empty();
  $('questions').html(html);
  $( "#quizbody" ).show(1000);
}

function fillData() {
  var FirstName = data[Math.floor(Math.random() * data.length)-1][1];
  var LastName = data[Math.floor(Math.random() * data.length)-1][2];
  var Company = data[Math.floor(Math.random() * data.length)-1][3];
  var ReportName = data[Math.floor(Math.random() * data.length)-1][4];
  var relation = ["wrote", "published by", "a report", "named"];
  var sentence = FirstName + " " + LastName + " wrote a report titled " + ReportName + "which was published by " + Company;
  return sentence;
/*
      if(data[0].constructor === Object) {
        for(var row in data) {
          html += '<tr>\r\n';
          for(var item in data[row]) {
            html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
          }
          html += '</tr>\r\n';
        }
      }
*/
}
