$(document).ready(function () {
    $("#design").click(function () {
      $("#img 1").toggle();
      $(".design p").toggle();
    });
    $("#development").click(function () {
      $("#img 2").toggle();
      $(".devp").toggle();
    });
  
    $("#management").click(function () {
      $("#img 3").toggle();
      $(".prop").toggle();
    });

    $("#devp").click(function () {
      $(".devp").slideUp('1500');
      $(".devp").slideDown('1500');
    });

  document.getElementById("mc-embedded-submit").addEventListener('click', function(){
    var name = $("#mce-NAME").val();
    if ($("#mce-NAME").val() &&  $("#mce-EMAIL").val()) {
      alert("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
    } else {
      alert("Please fill all fields!");
    }
  })