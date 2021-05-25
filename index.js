$(document).ready(function(){

  $(".radio1").click(function(){
    $("body").css("background-color", "#3A4764");
    $(".number, .operator").css({"background-color": "#EAE3DC", "color": "#444B5A", "box-shadow": "0 2px #B4A597"});
    $(".string, .calculator-screen").css("color", "#fff");
    $(".del, .reset").css({"background-color": "#637097", "box-shadow": "0 2px #404E72"});
    $(".equal, .slider").css({"background-color": "#D03F2F", "color": "#fff", "box-shadow": "0 2px #93261A"});
    $(".calculator, .label1, .label2, .label3").css("background-color", "#232C43");
    $(".calculator-screen").css("background-color", "#182034");
  });



  $(".radio2").click(function(){
    $("body").css("background-color", "#E6E6E6");
    $(".number, .operator").css({"background-color": "#E5E4E1", "box-shadow": "0 2px #A69D91"});
    $(".string, .number, .operator, .calculator-screen").css("color", "#35352C");
    $(".del, .reset").css({"background-color": "#377F86", "box-shadow": "0 2px #1B5F65"});
    $(".equal, .slider").css({"background-color": "#CA5502", "color": "#fff", "box-shadow": "0 2px #893901"});
    $(".calculator, .label1, .label2, .label3").css("background-color", "#D1CCCC");
    $(".calculator-screen").css("background-color", "#EDEDED");
  });


  $(".radio3").click(function(){
    $("body").css("background-color", "#160628");
    $(".number, .operator").css({"background-color": "#341C4F", "box-shadow": "0 2px #871C9C"});
    $(".string, .number, .operator, .calculator-screen").css("color", "#FFE53D");
    $(".del, .reset").css({"background-color": "#58077D", "box-shadow": "0 2px #BC15F4"});
    $(".equal, .slider").css({"background-color": "#00E0D1", "color": "#1B2428", "box-shadow": "0 2px #6CF9F2"});
    $(".calculator, .label1, .label2, .label3, .calculator-screen").css("background-color", "#1D0934");
  });



$(".number").click(function(){
  var val1 = $(this).val();
  var val2 = $("#calculator-screen").val();
    $("#calculator-screen").val(val2 + val1);

});

$(".del").click(function(){
  var val2  = $("#calculator-screen").val();
    $("#calculator-screen").val(val2.substring(0, val2.length - 1));
});

$(".reset").click(function(){
  $("#calculator-screen").val("");
});

$(".operator").click(function(){
  var val1 = $(this).val();
  var val2 = $("#calculator-screen").val();
  $("#calculator-screen").val(val2 + val1);
});

$(".equal").click(function(){
  var val2 = eval($("#calculator-screen").val());
  $("#calculator-screen").val(val2);
});


});
