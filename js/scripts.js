$(document).ready(function() {
  $("li#JavaScript").click(function() {
  $("p").removeClass();
  $("p#jsdef").toggle();
  });
  $("li#Operators").click(function() {
  $("p").removeClass();
  $("p#opdef").toggle();
  });
  $("li#Variables").click(function() {
  $("p").removeClass();
  $("p#vardef").toggle();
  });
  $("li#Conventions").click(function() {
  $("p").removeClass();
  $("p#condef").toggle();
  $("li").children("p").hide()
  });
});
