var hourEl = $('.hour');
var descriptionEl = $(".description");
var saveBtnEl = $(".saveBtn");
var timeBlockEl = $(".time-block")

//will remove this later. just adding so I can see time on page
var timeEl = $('#time');

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

rightNow = moment().hour();

// function currentTime() {
//     var rightNow = moment().hour();
//     //this can be removed when I remove the time from the html
//     timeEl.text(rightNow)
// }

// setInterval(currentTime, 1000);

// color coded to indicate whether it is in the past, present, or future
// be able to enter an event when clicking on timeblock 
// save button to save description to local Storage

function timeOfDay() {

}

var businessHour = [$("#8"), $("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16")];

console.log(businessHour[0].attr('id'))

for( let i = 0; i < businessHour.length; i++){
     const element = businessHour[i].attr('id');
     console.log(element);
     if (element < rightNow ){
         console.log("this is before now")
         businessHour[i].parent().addClass('past')

     } else if (element == rightNow) {
         console.log("this is now")
         businessHour[i].parent().addClass('present')
 
     } else {
         console.log("future")
         businessHour[i].parent().addClass('future')
     }
}

// businessHour.forEach(element => {
//     if (element.attr("id") < rightNow) {
//      console.log("this is before now")
//      $('this').timeBlockEl.addClass('past')
//     }
//      else if (element.attr("id") == rightNow) {
//         console.log("this is now")
//         $('this').timeBlockEl.addClass('present')
//     } else {
//         console.log("future")
//         $('this').timeBlockEl.addClass('future')
//     }
// });



