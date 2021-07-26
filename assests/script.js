//I'm not uses these two variables 
var hourEl = $('.hour');
var descriptionEl = $(".description");


// I am using this one
var saveBtnEl = $(".saveBtn");


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var rightNow = moment().hour();


var businessHour = [$("#8"), $("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16")];


businessHour.forEach(element => {
    var previousInput = localStorage.getItem(element.attr("id"))
    element.siblings('.description').val(previousInput)
})




businessHour.forEach(element => {
    if (element.attr("id") < rightNow) {
     element.parent().addClass('past')
    }
     else if (element.attr("id") == rightNow) {
        element.parent().addClass('present')
    } else {
        element.parent().addClass('future')
    }
});


saveBtnEl.click(function () {
    var userInput = $(this).siblings(".description").val();
    var timeSlot = $(this).siblings(".hour").attr('id');

    localStorage.setItem(timeSlot, userInput)
})


// var rightNow = 12;


// function currentTime() {
//     var rightNow = moment().hour();
//     //this can be removed when I remove the time from the html
//     timeEl.text(rightNow)
// }

// setInterval(currentTime, 1000);

// console.log(businessHour[0].attr('id'))

// for( let i = 0; i < businessHour.length; i++){
//      const element = businessHour[i].attr('id');
//      console.log(element);
//      if (element < rightNow ){
//          console.log("this is before now")
//          businessHour[i].parent().addClass('past')

//      } else if (element == rightNow) {
//          console.log("this is now")
//          businessHour[i].parent().addClass('present')
 
//      } else {
//          console.log("future")
//          businessHour[i].parent().addClass('future')
//      }
// }