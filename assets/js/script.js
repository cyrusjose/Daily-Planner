// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
console.log("Hello, World!");
// YOUR JS CODE GOES HERE
$(document).ready(function() {
    // Create the date for the planner



    // Display current day on page (##/##/####) format
    var today = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(today);
    //Create the hours

    var currentHour = moment().format("h");
    // var timeBlock = $('.hour')
    if ($('.hour') === current) {
        $('.description').addClass('present')
    }

    console.log(currentHour);
    var textEl = document.querySelectorAll('.description')

    textEl.value = localStorage.getItem('description');

    $('.saveBtn').on('click', function() {

        localStorage.setItem('description', textEl.value);
    })
});