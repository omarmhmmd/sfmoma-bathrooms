$('.hastip').tooltipsy({
  show: function (e, $el) {
      $el.css({
          'visibility':'visible',
          'opacity': '0.0',
          'display': 'block'
      }).animate({
          'opacity': '1.0'
      }, 500);
  },
  hide: function (e, $el) {
    $el.css({
        'visibility':'hidden',
        'opacity': '1.0',
        'display': 'block'
    }).animate({
        'opacity': '0.0'
    }, 500);
  },
  css: {
      'font-family': 'Mark Pro',
      'font-size': '18px',
      'padding-left': '30px',
      'padding-bottom': '12px',
      'max-width': '1000px',
      'color': 'white',
      'font-style': 'oblique',
      'background-color': 'none',
  }
});

/*$('.hastip').tooltipsy({
    offset: [10, 0],
    show: function (e, $el) {
        $el.css({
            'visibility':'visible',
            'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 50 + 'px',
            'opacity': '0.0',
            'display': 'block'
        }).animate({
            'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 50 + 'px',
            'opacity': '1.0'
        }, 400);
    },
    hide: function (e, $el) {
      $el.css({
          'visibility':'hidden',
          'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 0 + 'px',
          'opacity': '1.0',
          'display': 'block'
      }).animate({
          'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 50 + 'px',
          'opacity': '0.0'
      }, 400);
    },
    css: {
      'font-family': 'Mark Pro',
      'padding-left': '20px',
      'padding-top': '25px',
      'font-size': '18px',
      'max-width': '500px',
      'color': 'white',
      'font-style': 'oblique',
      'background-color': 'none',
    }
});*/
