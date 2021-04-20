$(document).ready(function () {
    $("#design").click(function () {
      $("#img 1").toggle('1500');
      $(".design p").toggle('1000');
    });
    $("#development").click(function () {
      $("#img 2").toggle('1500');
      $(".devp").toggle('1000');
    });
  
    $("#management").click(function () {
      $("#img 3").toggle('1500');
      $(".prop").toggle('1000');
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
  });
});
$(document).ready(function(){
  $("#first").hover(function(){
    $("#overlay").hide();
  }).hover(function(){
    $("#overlay").show();
  });
});
$(document).ready(function(){
  $("#sec").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#pic3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#pic4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#pic5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#pic6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#pic7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#pic8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});