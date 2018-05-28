$(document).ready(function(){
  $('#modal1').modal();
  $('.parallax').parallax();
  $('.collapsible').collapsible();
  $('select').formSelect();
});
 


$(document).ready(function(){
  $("#btn-1").click(function(){
      $("#btn-1").addClass("disabled");
  });
  $("#btn-2").click(function(){
      $("#btn-2").addClass("disabled");
  });
  $("#btn-3").click(function(){
      $("#btn-3").addClass("disabled");
  });    
});
