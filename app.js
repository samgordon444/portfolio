// STORY CLICKS

$('a.continue').click( function() {
	$(this).addClass('cleared');
    $(this).parent().next().addClass('visible');
    $(this).parent().next().next().addClass('exists');
} );
$('a.showall').click( function() {
	$('.portfolio').addClass('exists');
	$('.outro').addClass('exists');
} );

// BG IMAGE

var divs = $('.headimg'),
	$window = $(window);

var img = $('.headimg img');

$window.on('scroll', function() {
  var st = $(this).scrollTop(),
    pixs = 100 - (st / 2);
  if (st < 200) {
    img.css ({
      '-webkit-filter': 'blur('+pixs+'px)'
    })
  } else {
    img.css ({
      '-webkit-filter': 'blur(0px)'
    })
  }
});


/* // PORTFOLIO TITLES
var work = $('.work');
$(this).work.on('scroll', function () {
  var scrollTop = $(window).scrollTop(),
    elementOffset = $('.work').offset().top,
    scrollOn = (elementOffset - scrollTop),
    scrollOff = (scrollOn + $('.work').height() ),
    header = $('.workheader');

  if (scrollOn > 80) {
    header.css({
      'opacity': (0)
    })
  } else if (scrollOff < 200) {
    header.css({
      'opacity': (0)
    })
  } else {
    header.css({
      'opacity': (1)
    })
  }
});
*/
