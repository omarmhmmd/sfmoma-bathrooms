var aniSpeed = 1500;
var delayTime = 1500;
var sideNavAnimation = 700;
var sideNavEase = "easeInOutQuart";

$(function() {
    $('.sf').delay(delayTime).animate({ left: '-68%', top: '-20%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
    $('.mo').delay(delayTime).animate({ left: '50%', top: '-115%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
    $('.ma').delay(delayTime).animate({ left: '110%', top: '135%', "font-size":"144"}, aniSpeed, 'easeInOutQuart');
    //$('.ma').delay(delayTime).animate({ left: '110%', top: '135%', color: '#ff0000', "font-size":"144"}, aniSpeed, 'swing');
    $('.list').delay(3000).animate({ top: '88%'}, 1000, 'swing');

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

});

setTimeout(function () {
    $('.broom').show().addClass('loadBroom');}, 2250
);
