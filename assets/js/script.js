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
    // if (hour < current){

    // }
    // else if(hour > current){}
    // else {}
    // will be used for comparison
    console.log(currentHour)
});