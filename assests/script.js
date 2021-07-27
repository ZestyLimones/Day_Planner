var containerEl = $(".container");
var hourCounter = 8;

function newItems() {
  for (var i = 0; i < 9; i++) {
    var timeBlockEl = $("<div>");
    timeBlockEl.attr("class", "time-block row");
    var hourEl = $("<div>");
    hourEl.attr("class", "col-1 hour");
    hourEl
      .attr("id", hourCounter)
      .text(moment(hourCounter, "HH").format("h a"));
    var textAreaEl = $("<textarea>");
    textAreaEl.attr("class", "col-10 description");
    var btnEl = $("<div>")
      .attr("class", "col-1 saveBtn")
      .html('<i class="far fa-save fa-3x"></i>');

    timeBlockEl.append(hourEl);
    timeBlockEl.append(textAreaEl);
    timeBlockEl.append(btnEl);
    containerEl.append(timeBlockEl);
    hourCounter++;
  }
  myCalendar();
}

function myCalendar() {
  var saveBtnEl = $(".saveBtn");

  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY"));

  var rightNow = moment().hour();

  var businessHour = $(".hour");
  console.log(businessHour);

  $(".hour").each(function (index) {
    console.log($(this));
    var previousInput = localStorage.getItem($(this).attr("id"));
    $(this).siblings(".description").val(previousInput);

    if ($(this).attr("id") < rightNow) {
      $(this).parent().addClass("past");
    } else if ($(this).attr("id") == rightNow) {
      $(this).parent().addClass("present");
    } else {
      $(this).parent().addClass("future");
    }
  });

  saveBtnEl.click(function () {
    var userInput = $(this).siblings(".description").val();
    var timeSlot = $(this).siblings(".hour").attr("id");

    localStorage.setItem(timeSlot, userInput);
  });
}

newItems();
