var aniSpeed = 1750;
var colorSpeed = 2000;
var svgSpeed = 500;


$(function() {
  var $anchor = $('a.home');
  var href = $('a.home').attr('href');
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top)
  }, aniSpeed, 'easeInOutExpo');

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on('click', 'a.green, a.pink, a.blue, a.purple, a.black, a.red, a.white, a.home', function(event) {
    $(".level").css('visibility', 'visible');
    if($(window).width() < 481) {
      $('.container').css('top', '115%');
    }

    $("#globalGreenFloorplan").empty();
    $("#globalPinkFloorplan").empty();
    $("#globalBlueFloorplan").empty();
    $("#globalPurpleFloorplan").empty();
    $("#globalBlackFloorplan").empty();
    $("#globalRedFloorplan").empty();
    $("#globalWhiteFloorplan").empty();
    $(".floorplanFade").fadeIn(aniSpeed);

    var $anchor = $(this);
    var href = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, aniSpeed, 'easeInOutExpo');

    if (href == "#home") {
      $(".whiteActive").removeClass("activeWhite");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".redActive").removeClass("activeRed");
      $('.level').animate({ "color": "#000000"}, aniSpeed, 'swing');
      $('.sideNav').animate({ "border-right-color": "#ffffff"}, aniSpeed, 'swing');
    }

    if (href == "#green") {
      /***** Navigation Link Signifiers *****/
      $(".greenActive").addClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".redActive").removeClass("activeRed");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Green").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("07").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#00ff00"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#00ff00"}, aniSpeed, 'swing');
      var greenVivus = new Vivus('globalGreenFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/007.svg'}, function (myVivus) {
        if (greenVivus.getStatus() === 'end') {
          greenVivus.stop();
          greenVivus.destroy();
          $("#level007").empty();
          $('#greenFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level007").empty();
            $('#greenFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

    else if (href == "#pink") {
      /***** Navigation Link Signifiers *****/
      $(".pinkActive").addClass("activePink");
      $(".greenActive").removeClass("activeGreen");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".redActive").removeClass("activeRed");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Pink").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("06").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#F45F8F"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#F45F8F"}, aniSpeed, 'swing');
      var pinkVivus = new Vivus('globalPinkFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/006.svg'}, function (myVivus) {
        if (pinkVivus.getStatus() === 'end') {
          pinkVivus.stop();
          pinkVivus.destroy();
          $("#globalFloorplan").empty();
          $('#pinkFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level006").empty();
            $('#pinkFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

    else if (href == "#blue") {
      /***** Navigation Link Signifiers *****/
      $(".blueActive").addClass("activeBlue");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".redActive").removeClass("activeRed");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Blue").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("05").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#1493A3"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#1493A3"}, aniSpeed, 'swing');
      var blueVivus = new Vivus('globalBlueFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/005.svg'}, function (myVivus) {
        if (blueVivus.getStatus() === 'end') {
          blueVivus.stop();
          blueVivus.destroy();
          $("#globalFloorplan").empty();
          $('#blueFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level005").empty();
            $('#blueFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }


    else if (href == "#purple") {
      /***** Navigation Link Signifiers *****/
      $(".purpleActive").addClass("activePurple");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".redActive").removeClass("activeRed");
      $(".blackActive").removeClass("activeBlack");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Purple").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("04").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#4C367C"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#4C367C "}, aniSpeed, 'swing');
      var purpleVivus = new Vivus('globalPurpleFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/004.svg'}, function (myVivus) {
        if (purpleVivus.getStatus() === 'end') {
          purpleVivus.stop();
          purpleVivus.destroy();
          $("#globalPurpleFloorplan").empty();
          $('#purpleFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level004").empty();
            $('#purpleloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

    else if (href == "#black") {
      /***** Navigation Link Signifiers *****/
      $(".blackActive").addClass("activeBlack");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".redActive").removeClass("activeRed");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Black & White").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("03").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#ffffff"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#ffffff"}, aniSpeed, 'swing');
      var blackVivus = new Vivus('globalBlackFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/003.svg'}, function (myVivus) {
        if (blackVivus.getStatus() === 'end') {
          blackVivus.stop();
          blackVivus.destroy();
          $("#globalBlackFloorplan").empty();
          $('#blackFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level003").empty();
            $('#blackFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

    else if (href == "#red") {
      /***** Navigation Link Signifiers *****/
      $(".redActive").addClass("activeRed");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".whiteActive").removeClass("activeWhite");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("Red").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("02").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#ff0000"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#ff0000"}, aniSpeed, 'swing');
      var redVivus = new Vivus('globalRedFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/002.svg'}, function (myVivus) {
        if (redVivus.getStatus() === 'end') {
          redVivus.stop();
          redVivus.destroy();
          $("#globalRedFloorplan").empty();
          $('#redFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level002").empty();
            $('#redFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

    else if (href == "#white") {
      /***** Navigation Link Signifiers *****/
      $(".whiteActive").addClass("activeWhite");
      $(".greenActive").removeClass("activeGreen");
      $(".pinkActive").removeClass("activePink");
      $(".blueActive").removeClass("activeBlue");
      $(".purpleActive").removeClass("activePurple");
      $(".blackActive").removeClass("activeBlack");
      $(".redActive").removeClass("activeRed");
      /***** END Navigation Link Signifiers *****/

      $(".floorColor").fadeOut(function() {
        $(this).text("White").fadeIn(colorSpeed);
      });
      $(".floorNumber").fadeOut(function() {
        $(this).text("01").fadeIn(colorSpeed);
      });
      $('.sideNav').animate({ "border-right-color": "#fffdd0"}, aniSpeed, 'swing');
      $('.level').animate({ "color": "#fffdd0"}, aniSpeed, 'swing');
      var whiteVivus = new Vivus('globalWhiteFloorplan', {type: 'delayed', duration: svgSpeed, animTimingFunction: Vivus.EASE, file: 'svg/001.svg'}, function (myVivus) {
        if (whiteVivus.getStatus() === 'end') {
          whiteVivus.stop();
          whiteVivus.destroy();
          $("#globalWhiteFloorplan").empty();
          $('#whiteFloorplan').css('visibility', 'visible');
          if($(window).width() < 481) {
            $('.container').animate({ top: '36vh', }, 1000, 'easeInOutQuart');
            $("#level001").empty();
            $('#whiteFloorplan').css('visibility', 'hidden');
          }
        }
      });
    }

  });
});
