var FirstName = "";
var LastName = "";
var Company = "";
var ReportName = "";
var year = "";
var selectseries = "";
var selectedition = "";
var city = "";
var Country = "";
var selectpage = "";
var type = "";
var webpage = "";
var pages = "";
var issues = "";
var answer = "<div class='bg-danger text-white'>Error: Could not find answer</div>"
$( "#quizbody" ).hide();
$("#start").addClass('disabled');

$(document).ready(function() {

  $( "#start" ).click(function() {
    if($(this).hasClass( "disabled" )) {
      alert("Please select refrence type first");
    } else {
    $(this).addClass('disabled');
    startq();
    $( "#quizbody" ).show(1000);
    }
  });

  $( "#refType" ).change(function() {
    $("#start").removeClass('disabled');
  });

  $( "#back" ).click(function() {
    if ($("#UsrInput").val() != "") {
      if (confirm("Warning: going back will cause any data you have entered to be lost!")) {
        location.reload();
      } else {
          // Do nothing!
      }
    } else {
      location.reload();
    }
  });

  $( "#submitAns" ).click(function() {
    if($(this).hasClass( "disabled" )) {
      // do nothing
    } else {
      $(this).addClass('disabled');
      $("#next").removeClass('hidden');
      var input = $("#UsrInput").val();
      $('#results').empty();
      $('#results').html(answer);
      checkInput(input);
    }
  });

  $( "#next" ).click(function() {
    var revert = "<p>No results found. Please submit an answer first.</p>";
    $(this).addClass('hidden');
    $("#UsrInput").val('');
    $('#results').empty();
    $('#results').html(revert);
    startq();
    $("#submitAns").removeClass('disabled');
  });

});

function checkInput(input) {
  if (input != "") {
  input = input.toLowerCase();
  FirstName = FirstName.toLowerCase();
  LastName = LastName.toLowerCase();
  Company = Company.toLowerCase();
  ReportName = ReportName.toLowerCase();
  Country = Country.toLowerCase();
  city = city.toLowerCase();
  webpage = webpage.toLowerCase();

  order = [];

    if (type == 2) {
      if (input.indexOf(" " + FirstName.charAt(0) + " ") != -1) {
      order.push(input.indexOf(" " + FirstName.charAt(0) + " "));
    } else if (input.indexOf(" " + FirstName.charAt(0)) != 0) {
      order.push(input.indexOf(" " + FirstName.charAt(0)));
    } else {
      order.push(-1);
    }
      order.push(input.indexOf(FirstName));
      order.push(input.indexOf(LastName));
      order.push(input.indexOf(year));
      order.push(input.indexOf(ReportName));
      order.push(input.indexOf(Company));
      order.push(input.indexOf(selectseries));
      order.push(input.indexOf(city));
      order.push(input.indexOf(Country));
      order.push(input.indexOf(selectpage));
      //if (input.indexOf(selectpage) == -1) {
        // todo: find way of checking if it works when split.
      //}
      //console.log(input);
      console.log(order);
      var issues = 0;
      answer = "";
      if (order[0] == -1) {
        answer = answer + "<p class='text-warning' >" + FirstName.charAt(0) + " - Incorrect first name inital</p>";
        issues++;
      } else if (order[0] > order[3] || order[0] < order[2]) {
        answer = answer + "<p class='text-warning' >" + FirstName.charAt(0) + " - Incorrect position</p>";
        issues++;
      }
      if (order[1] != -1){
        answer = answer + "<p class='text-warning' >" + FirstName + " - Should not exist in reference</p>";
        issues++;
      }

      if (order[2] == -1) {
        answer = answer + "<p class='text-warning' >" + LastName + " - Last name not found</p>";
        issues++;
      } else if(order[2] != 0){
        answer = answer + "<p class='text-warning' >" + LastName + " - In wrong place</p>";
        issues++;
      }
      if (order[3] == -1) {
        answer = answer + "<p class='text-warning' >" + year + " - Not found</p>";
        issues++;
      } else if (order[3] < order[0] || (order[3] > order[4] && order[4] != -1)) {
        answer = answer + "<p class='text-warning' >" + year + " - In wrong place</p>";
        issues++;
      }
      if (order[4] == -1) {
        answer = answer + "<p class='text-warning' >" + ReportName + " - Not found</p>";
        issues++;
      } else if (order[4] < order[3] || order[4] > order[5]) {
        answer = answer + "<p class='text-warning' >" + ReportName + " - In wrong place</p>";
        issues++;
      }
      if (order[5] == -1) {
        answer = answer + "<p class='text-warning' >" + Company + " - Not found</p>";
        issues++;
      } else if (order[5] < order[4]) {
        answer = answer + "<p class='text-warning' >" + Company + " - In wrong place</p>";
        issues++;
      }
      if (order[6] == -1) {
        answer = answer + "<p class='text-warning' >" + selectseries + " - Not found</p>";
        issues++;
      }
      if (order[7] == -1) {
        answer = answer + "<p class='text-warning' >" + city + " - Not found</p>";
        issues++;
      }
      if (order[8] == -1) {
        answer = answer + "<p class='text-warning' >" + Country + " - Not found</p>";
        issues++;
      }
      if (order[9] == -1) {
        answer = answer + "<p class='text-warning' >" + selectpage + " - Not found</p>";
        issues++;
      }

      if (issues > 0) {
        answer = "<label>Possible Issues:</label>" + answer;
      }

      $('#results').append(answer);

    } else if (type == 3) {
      order.push(input.indexOf(LastName));
      order.push(input.indexOf(FirstName));
      order.push(input.indexOf(year));
      order.push(input.indexOf(ReportName));
      order.push(input.indexOf(Company));
      order.push(input.indexOf(webpage));

      console.log(order);
      var issues = 0;
      answer = "";
      if (order[0] == -1) {
        answer = answer + "<p class='text-warning' >" + LastName + " - Not found</p>";
        issues++;
      } else if (order[0] != 0) {
        answer = answer + "<p class='text-warning' >" + LastName + " - Incorrect position</p>";
        issues++;
      }
      if (order[1] == -1){
        answer = answer + "<p class='text-warning' >" + FirstName + " - Not found</p>";
        issues++;
      } else if (order[1] < order[0] || order[1] > order[2]) {
        answer = answer + "<p class='text-warning' >" + FirstName + " - Incorrect position</p>";
        issues++;
      }
      if (order[2] == -1) {
        answer = answer + "<p class='text-warning' >" + year + " - Last name not found</p>";
        issues++;
      } else if(order[2] < order[1] || order[2] > order[3]){
        answer = answer + "<p class='text-warning' >" + year + " - In wrong place</p>";
        issues++;
      }
      if (order[3] == -1) {
        answer = answer + "<p class='text-warning' >" + ReportName + " - Not found</p>";
        issues++;
      } else if (order[3] < order[2] || order[3] > order[4]) {
        answer = answer + "<p class='text-warning' >" + ReportName + " - In wrong place</p>";
        issues++;
      }
      if (order[4] == -1) {
        answer = answer + "<p class='text-warning' >" + Company + " - Not found</p>";
        issues++;
      } else if (order[4] < order[3] || order[4] > order[5]) {
        answer = answer + "<p class='text-warning' >" + Company + " - In wrong place</p>";
        issues++;
      }
      if (order[5] == -1) {
        answer = answer + "<p class='text-warning' >" + webpage + " - Not found</p>";
        issues++;
      } else if (order[5] < order[4]) {
        answer = answer + "<p class='text-warning' >" + webpage + " - In wrong place</p>";
        issues++;
      }

      if (issues > 0) {
        answer = "<label>Possible Issues:</label>" + answer;
      }

      $('#results').append(answer);

    } else {
      console.error("invalid APA type");
    }
  } else {
    alert("Please atleast try before checking the answer!");
  }
}

function startq() {
  if (type == "") {
  type = $( "#refType" ).val();
  }
  var input = $('#input3').val();
  var data = $.csv.toObjects(input);
  var html = generateTable(data, type);
  $('#questions').empty();
  $('#questions').html(html);
}

// build HTML table data from an array (one or two dimensional)
function generateTable(data, type) {
  var html = '';
  var SCountry;

  if(typeof(data[0]) === 'undefined') {
    return null;
  }

  if(data[0].constructor === Object) {
    //console.log(data);
    FirstName = data[Math.floor(Math.random() * data.length)]["FirstName"];
    LastName = data[Math.floor(Math.random() * data.length)]["LastName"];
    Company = data[Math.floor(Math.random() * data.length)]["Company"];
    ReportName = data[Math.floor(Math.random() * data.length)]["ReportName"];
    year = data[Math.floor(Math.random() * data.length)]["Year"];
    var relation = ["wrote a report titled", "doodled a report called", "threw together a paper named", "wrote a document named", "quickly scribbled down on scrap paper and called it", "for some reason decided to name a book"];
    var publisher = [". This was then published by", ", which was then distributed by", ". It was then published by", ". Their thing was then published by", ". they were asked to write it for work named",". Their componey published it. they are named"];
    var when = ["In", "During the year of", "Mid way through", "In the period of", "All months before the end of", "Part way through"];
    var series = ["", "", "", "vol 1", "vol 2", "vol 3"];
    selectseries = series[Math.floor(Math.random() * series.length)];
    var edition = ["3rd edition", "4th edition", "5th edition" , "" , "", ""];
    selectedition = edition[Math.floor(Math.random() * series.length)];
    city = data[Math.floor(Math.random() * data.length)]["City"];
    Country = data[Math.floor(Math.random() * data.length)]["Country"];
    var pagelead = [" You used information from pages", " There was also cool quotes that you used on pages", " You used info from pages", " Very helpful page(s) for you were", " Your poject was only possible with help from pages", " You used the image(s) on p", " You used data from pag(e)", " Pictures of graphs you used came from page(s)", " You basically coppied info from pages"]
    var pages = ["1-3", "63-47", "73-81", "20-25", "36-37", "21", "43", "17-19","15-16"]
    selectpage = pages[Math.floor(Math.random() * pages.length)];
    var act = ["You coppied information from", "You got images from", "You used information from", "You stole info from"];
    webpage = data[Math.floor(Math.random() * data.length)]["Webpage"];
    var host = ["In the site's footer it says powerd by", "The logo in the top left of the page is a trademark of", "The domain belongs to", "The site is hosted by", "The site was posted on bookface.com which is owned by"];
    var auther = ["and appears to have been written in", "it seems to have been posted on the internet in", "the year which the artical was thrown on the web was", "the page says it was posted in"];
    // need to add state


    if (Country == null || Country == "" || Country == "undefined") {
      Country = "";
    } else {
    SCountry = ", " + Country + ",";
    }

    if (type == 1) {
      type = Math.floor(Math.random() * ((3-2)+1) + 2);
    }

    if (type == 2) {
      html = "<p class='text-primary'>"
       + FirstName + " " + LastName
       + " " + relation[Math.floor(Math.random() * relation.length)]
       + " " + ReportName + " " + selectedition + " " +selectseries + publisher[Math.floor(Math.random() * publisher.length)]
       + " " + Company + ", located in " + city + SCountry + " " + when[Math.floor(Math.random() * when.length)]
       + " " + year + "." + pagelead[Math.floor(Math.random() * pagelead.length)] + " " + selectpage + ".";

       answer = "<label for='answer'>Recommended Answer:</label><p id='answer' class='text-success'>" + LastName + ", " + FirstName.charAt(0) + ". (" + year + "). " + ReportName + " " + answerSeries(selectseries) + ", " + answerEdition(selectedition) + city + ": " + Company + ", " + selectpage + ".<p>"
    } else if (type == 3) {
      html = "<p class='text-primary'>"
      + act[Math.floor(Math.random() * act.length)] + " " + webpage + ". It was titled " + ReportName + " " + auther[Math.floor(Math.random() * auther.length)] + " " + year + " by " + FirstName + " " + LastName + ". " + host[Math.floor(Math.random() * host.length)] + " " + Company + ".";
      answer = "<label for='answer'>Recommended Answer:</label><p id='answer' class='text-success'>" + LastName + ", " + FirstName + ", (" + year + "). " + ReportName + ", " + Company + ". Retrieved from " + webpage + ".";
    } else {
      html = "<div class='bg-danger text-white'>Error: invalid refrence type selected</div>"
    }
  }

  return html + " You have clearly used information from this source. Refrence it in <b>APA</b>, In the space below.</p>";
}

function answerEdition(edition) {
  if (edition == "") {
    return "";
  } else {
    return "("+edition+")";
  }
}

function answerSeries(series) {
  if (series == "") {
    return "";
  } else {
    return series+".";
  }
}
