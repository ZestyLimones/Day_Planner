var hourEl = $('.hour');
var descriptionEl = $(".description");
var saveBtnEl = $(".saveBtn");

//will remove this later. just adding so I can see time on page
var timeEl = $('#time');

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function currentTime() {
    var rightNow = moment().format('hh:mm:ss a');
    timeEl.text(rightNow)
}

setInterval(currentTime, 1000);

// color coded to indicate whether it is in the past, present, or future
// be able to enter an event when clicking on timeblock 
// save button to save description to local Storage

