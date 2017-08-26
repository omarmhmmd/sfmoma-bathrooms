var aniSpeed = 1500;
var delayTime = 1500;
var sideNavAnimation = 700;
var sideNavEase = "easeInOutQuart";

$(function() {

    /******** MOBILE ********/
    if($(window).width() < 481) {

      $(document).bind("touchmove", function(e){
        e.preventDefault();
      });

      /*$('section.green').on('touchmove', function (e) {
        e.stopPropagation();
      });

      $('section.pink').on('touchmove', function (e) {
        e.stopPropagation();
      });*/

      console.log("phone");
      //$('.broom').css('background-color', 'red');

      $('.sf').delay(delayTime).animate({ top: '-45%', }, aniSpeed, 'easeInOutQuart');
      $('.mo').delay(delayTime).animate({ top: '-60%', }, aniSpeed, 'easeInOutQuart');
      $('.ma').delay(delayTime).animate({ top: '-31%', }, aniSpeed, 'easeInOutQuart');
      $('.list').delay(1800).animate({ top: '92.5%'}, 1000, 'swing');
      //$("#myCarouselGreen .carousel-inner > .item").css("display","block");

      $(".elevatorLink").click(function(){
        $(".container").css('visibility', 'visible');
        var x = $(".sideNav").position();
        if (x.left == -50) {
          $('.sideNav').animate({ right: '88%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '0px'}, sideNavAnimation, sideNavEase);
        }
        else {
          $('.sideNav').animate({ right: '100%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '0px'}, sideNavAnimation, sideNavEase);
        }
        $(this).toggleClass('elevatorActive');
     });
    }

    /******** DESKTOP ********/
    else {
      $('.sf').delay(delayTime).animate({ left: '-68%', top: '-20%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
      $('.mo').delay(delayTime).animate({ left: '50%', top: '-115%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
      $('.ma').delay(delayTime).animate({ left: '110%', top: '135%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
      $('.list').delay(3000).animate({ top: '88.5%'}, 1000, 'swing');

      $(".elevatorLink").click(function(){
        $(".container").css('visibility', 'visible');
        var x = $(".sideNav").position();
        if (x.left == -50) {
          $('.sideNav').animate({ right: '96%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '50px'}, sideNavAnimation, sideNavEase);
        }
        else {
          $('.sideNav').animate({ right: '100%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '0px'}, sideNavAnimation, sideNavEase);
        }
        $(this).toggleClass('elevatorActive');
     });
    }

    $(".aboutButton").click(function(){
      if($(".aboutParagraph").is(":visible")) {
        setTimeout(function () {
          $(".broom").slideToggle(750);}, 800
        );
        $(".aboutParagraph").slideToggle(1000);
      }
      else {
        setTimeout(function () {
           $(".aboutParagraph").slideToggle(1000);}, 800
        );
        $(".broom").slideToggle(1000).removeClass("loadBroom");
      }
      $(this).toggleClass('buttonActive');
   });
  /******** END DESKTOP ********/


});

setTimeout(function () {
    $('.broom').show().addClass('loadBroom');}, 2250
);
