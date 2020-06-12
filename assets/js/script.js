// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
console.log('Hello, World!');
// YOUR JS CODE GOES HERE
$(document).ready(function() {
    // Create the date for the planner

    const $date = $('.date');
    const $inputsForm = $('inputs')

    // Display current day on page (##/##/####) format
    var today = moment().subtract(10, 'days').calendar();
    $('#currentDay').text(today);
    //Create the hours
    // console.log(moment().format('h'))
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
    // if (hour < current){}
    // else if(hour > current){}
    // else {}
    // will be used for comparison
    var currentHour = moment().format('h');
    for (var i = 0; i < hours.length; i++) {

        let $groupDiv = $('<div>');
        let $hourDiv = $('<div>');
        let $inputDiv = $('<input>');
        let $buttonDiv = $('<div>');
        let $saveButton = $('<button>');
        let $saveIcon = $('<i>');


        $groupDiv.addclass('group mb-3');
        $inputDiv.addclass('form-control').attr('type', 'text');
        $hourDiv.addclass('group-append group-text').text(hours[i]);
        $buttonDiv.addclass('group-append');
        $saveButton.addclass('btn btn-primary saveButton');
        $saveIcon.addclass('material-icons').text('save');

        $saveButton.append($saveIcon);
        $buttonDiv.append($saveButton);
        $groupDiv.append($hourDiv, $inputDiv, $buttonDiv);

        $inputsForm.append($groupDiv);


        
        // var timeBlock = $('<div class = "hour row time-block">');
        // var descrptionArea = $('<textArea>');
        // timeBlock.text(hours[i]);
        // timeBlock.attr('data-name', hours[i]);

        // $('.container').append(timeBlock)
        // $('data-name').append(descrptionArea);

    }
});