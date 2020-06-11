const moment = require("moment");
// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
console.log('Hello, World!');
// YOUR JS CODE GOES HERE
$(document).ready(function() {
    var today = moment().subtract(10, 'days').calendar();

    $('#currentDay').text(today);
})