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

  $(".fact-btn").click(function(e){
    e.preventDefault();
    $(this).closest('.fact').toggleClass('answer');
    $(this).toggleClass('hidden');
    $(this).closest('.fact').find('.details').toggleClass('hidden');
    $(this).closest('.fact').find('.research').toggleClass('hidden');
  });

  /**************** TOWER FACT ************/
  $("#collapseImages").on('shown.bs.collapse', function() {
    $("#berkeley").animate({height: "400px"}, 1500);
    $("#stanford").animate({height: "250px"}, 1500);
    $("body").animate({scrollTop: $(document).height()});
  });





});
