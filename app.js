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

// // BG IMAGE

// var divs = $('.headimg'),
// 	$window = $(window);

// var img = $('.headimg img');

// $window.on('scroll', function() {
//   var st = $(this).scrollTop(),
//     pixs = 100 - (st / 5);
//   if (st < 500) {
//     img.css ({
//       '-webkit-filter': 'blur('+pixs+'px)'
//     })
//   } else if ( st >= 500 && st < 2000) {
//     img.css ({
//       '-webkit-filter': 'blur(0px)',
//     })
//     divs.css ({
//       'opacity': '1',
//     })
//   } else {
//     divs.css ({
//       'opacity': '0'
//     })
//   }
// });