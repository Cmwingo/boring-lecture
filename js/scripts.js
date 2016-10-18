$(document).ready(function() {
  $("p#p1").click(function() {
    $("p#p1").removeClass();
    $("p#p2").removeClass();
    $("p#p3").removeClass();
    $("p#p4").removeClass();
    $("p#p1").addClass("selected");
  })
  $("p#p2").click(function() {
    $("p#p1").removeClass();
    $("p#p2").removeClass();
    $("p#p3").removeClass();
    $("p#p4").removeClass();
    $("p#p2").addClass("selected");
  })
  $("p#p3").click(function() {
    $("p#p1").removeClass();
    $("p#p2").removeClass();
    $("p#p3").removeClass();
    $("p#p4").removeClass();
    $("p#p3").addClass("selected");
  })
  $("p#p4").click(function() {
    $("p#p1").removeClass();
    $("p#p2").removeClass();
    $("p#p3").removeClass();
    $("p#p4").removeClass();
    $("p#p4").addClass("selected");
  })
})
