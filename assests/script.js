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
  //should all of this go into a large function

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

// //I'm not uses these two variables
// var hourEl = $('.hour');
// var descriptionEl = $(".description");

// // I am using this one
// var saveBtnEl = $(".saveBtn");

// var today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY"));

// var rightNow = moment().hour();

// var businessHour = [$("#8"), $("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16")];

// //should all of this go into a large function

// businessHour.forEach(element => {
//     var previousInput = localStorage.getItem(element.attr("id"))
//     element.siblings('.description').val(previousInput)

//     if (element.attr("id") < rightNow) {
//      element.parent().addClass('past')
//     }
//      else if (element.attr("id") == rightNow) {
//         element.parent().addClass('present')
//     } else {
//         element.parent().addClass('future')
//     }
// });

// saveBtnEl.click(function () {
//     var userInput = $(this).siblings(".description").val();
//     var timeSlot = $(this).siblings(".hour").attr('id');

//     localStorage.setItem(timeSlot, userInput)
// })

// var rightNow = 12;

// businessHour.forEach(element => {
//     var previousInput = localStorage.getItem(element.attr("id"))
//     element.siblings('.description').val(previousInput)

// });

// function currentTime() {
//     var rightNow = moment().hour();
//     //this can be removed when I remove the time from the html
//     timeEl.text(rightNow)
// }

// setInterval(currentTime, 1000);

// console.log(businessHour[0].attr('id'))

for (let i = 0; i < businessHour.length; i++) {
  const element = businessHour[i].attr("id");
  console.log(element);
  if (element < rightNow) {
    console.log("this is before now");
    businessHour[i].parent().addClass("past");
  } else if (element == rightNow) {
    console.log("this is now");
    businessHour[i].parent().addClass("present");
  } else {
    console.log("future");
    businessHour[i].parent().addClass("future");
  }
}
