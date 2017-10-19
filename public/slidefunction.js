function first(){
    $('.banner').css('background','url(images/vangogh_480.jpg)');
  }
  function second(){
    $('.banner').css('background','url(images/zaanse-schans2_720.jpg)');
  }
  function third(){
    $('.banner').css('background','url(images/volendam_720.jpg)');
  again();
  }
  function again(){
  setTimeout(first, 3000);
  setTimeout(second, 6000);
  setTimeout(third, 9000);
  }
$(document).ready(function(){
  again();
});