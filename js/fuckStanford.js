$(document).ready(function(){
  console.log("FUCK STANFORD");
  var viewHeight = window.innerHeight - $(".navbar").height();
  var padding = (viewHeight - $(".intro-text").height()) / 2;


  $(".scrollableLink").click(function(e){
    var target = $(this.getAttribute('href'));
    console.log(target);

    if (target.selector == "#"){
      console.log("hitting #");
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: "0px"
      }, 1000);
    }
    if( target.length ) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });





});
