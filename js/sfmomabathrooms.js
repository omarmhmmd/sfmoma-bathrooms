var aniSpeed = 1500;
var delayTime = 1500;
var sideNavAnimation = 700;
var sideNavEase = "easeInOutQuart";

$(function() {

    window.onresize = function (event) {
      applyOrientation();
    }

    function applyOrientation() {
      if (window.innerHeight < window.innerWidth) {
        $('section').css('visibility', 'hidden');
        $('svg').css('visibility', 'hidden');
        $('.sideNav').css('visibility', 'hidden');
        $('.container').css('visibility', 'hidden');
        $('html').css('animation', 'colorchangeBackground 10s infinite alternate')
        $('.level').css('visibility', 'hidden');
      }
      else {
        $('.level').css('visibility', 'visible');
        $('section').css('visibility', 'visible');
        $('svg').css('visibility', 'visible');
        $('.sideNav').css('visibility', 'visible');
        $('.container').css('visibility', 'visible');
        $('html').css('animation', 'none')
      }
    }
    /******** MOBILE ********/
    if($(window).width() < 481) {
      $(document).bind("touchmove", function(e){
        e.preventDefault();
      });

      console.log("phone");
      //$('.broom').css('background-color', 'red');

      $('.sf').delay(delayTime).animate({ top: '8%', }, aniSpeed, 'easeInOutQuart');
      $('.mo').delay(delayTime).animate({ top: '2.5%', left: '33%'}, aniSpeed, 'easeInOutQuart');
      $('.ma').delay(delayTime).animate({ top: '14.25%', }, aniSpeed, 'easeInOutQuart');
      $('.list').delay(1800).animate({ top: '92.5%'}, 1000, 'swing');

      $(".elevatorLink").click(function() {
        $(".container").css('visibility', 'visible');
        var x = $(".sideNav").position();
        if (x.left == -50) {
          $('.sideNav').animate({ right: '86%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '0px'}, sideNavAnimation, sideNavEase);
        }
        else {
          $('.sideNav').animate({ right: '100%'}, sideNavAnimation, sideNavEase);
          $('.home').animate({ left: '0px'}, sideNavAnimation, sideNavEase);
        }
        $(this).toggleClass('elevatorActive');
     });

     document.getElementById("orderOnDesktop").innerHTML = "Visit desktop site to order";
    }

    /******** DESKTOP ********/
    else {
      $('.sf').delay(delayTime).animate({ left: '-1.5%', top: '25%', "font-size":"11vw"}, aniSpeed, 'easeInOutQuart');
      $('.mo').delay(delayTime).animate({ left: '50%', top: '-9%', "font-size":"11vw"}, aniSpeed, 'easeInOutQuart');
      $('.ma').delay(delayTime).animate({ left: '76.5%', top: '81%', "font-size":"11vw"}, aniSpeed, 'easeInOutQuart');
      $('.list').delay(3000).animate({ top: '88.5%'}, 1000, 'swing');

      $(".elevatorLink").click(function(){
        $(".level").css('visibility', 'visible');
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

    $(".zineButton").click(function() {
      $(".level").css('visibility', 'hidden');
      if($(".zinePic").is(":visible")) {
        document.getElementById("abtBut").disabled = false;
        setTimeout(function () {
          $(".broom").slideToggle(750);}, 1100
        );
        $(".zinePic").slideToggle(1000);
      }
      else {
        document.getElementById("abtBut").disabled = true;
        setTimeout(function () {
          $(".zinePic").slideToggle(1000);}, 800
        );
        $(".broom").slideToggle(1000).removeClass("loadBroom");
      }
      $(this).toggleClass('zineButtonActive');
    });

    $(".aboutButton").click(function() {
      if($(".aboutParagraph").is(":visible")) {
        document.getElementById("zineBut").disabled = false;
        setTimeout(function () {
          $(".broom").slideToggle(750);}, 800
        );
        $(".aboutParagraph").slideToggle(1000);
      }
      else {
        document.getElementById("zineBut").disabled = true;
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
