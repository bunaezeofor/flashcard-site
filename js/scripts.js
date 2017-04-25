$(document).ready(function() {
  $('li').click(function(){
       $(this).next('p').toggle();
  });

});
