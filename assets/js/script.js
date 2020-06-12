// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
console.log('Hello, World!');
// YOUR JS CODE GOES HERE
$(document).ready(function() {
    // Create the date for the planner
    var today = moment().subtract(10, 'days').calendar();
    $('#currentDay').text(today);
    //Create the hours
    console.log(moment().format('h'))
    var hours = [
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
    ];
    var currentHour = moment().format('h');
    for (var i = 0; i < hours.length; i++) {
        var timeBlock = $('<div class = "hour row time-block">');
        timeBlock.text(hours[i]);

        $('.container').append(timeBlock)

    }
});