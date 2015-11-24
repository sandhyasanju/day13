$(document).ready(function(){
  $("#button").click(function(){
    $("#show").hide();
    $("#hidden").show();
  });
  $("#button2").click(function(){
    $("#hidden").hide();
    $("#show").show();
  });
  $("#button3").click(function(){
    $("#alert").show();
    $("#checkbox").change(function(){
      alert("all filds must be filled");
    });
  });
});
