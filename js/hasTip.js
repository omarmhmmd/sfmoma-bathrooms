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
      'font-family': 'markBook',
      'font-size': '18px',
      'padding-left': '30px',
      'padding-bottom': '12px',
      'max-width': '1000px',
      'color': 'white',
      'font-style': 'italic',
      'background-color': 'none',
  }
});

$('.hastipBelow').tooltipsy({
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
  offset: [0, 30],
  css: {
      'font-family': 'markBook',
      'font-size': '18px',
      'padding-left': '30px',
      'padding-top': '7.75px',
      'max-width': '1000px',
      'color': 'white',
      'font-style': 'italic',
      'background-color': 'none',
  }
});

$('.hastipRight').tooltipsy({
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
  offset: [20, 0],
  css: {
    'font-family': 'markBook',
    'font-size': '18px',
    'padding-left': '20px',
    'padding-top': '25px',
    'max-width': '2000px',
    'color': 'white',
    'font-style': 'italic',
    'background-color': 'none',
  }

});
