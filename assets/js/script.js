$(document).ready(function () {
  // function to build and display current time
  function getCurrentTime() {
    var today = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(today);
  }
  getCurrentTime();

  // function to compare current hour with hour on page
  function compareHour() {
    var hourNow = moment().format("H");
    console.log(hourNow);
    $(".description").each(function () {
      var hourEl = parseInt($(this).attr("id"));
      if (hourEl < hourNow) {
        $(this).addClass("past");
      } else if (hourEl === hourNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  compareHour();

  function save() {
    var saveButton = $(this);
    var reminderText = saveButton.siblings(".description").val();
    var timePanel = saveButton.siblings(".description").attr("id");
    localStorage.setItem(timePanel, reminderText);
  }
  $(".saveBtn").on("click", save);
  obtainText();

  function obtainText() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
  }
});
