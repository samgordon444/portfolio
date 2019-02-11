// // STORY CLICKS

// $('a.continue').click( function() {
// 	$(this).addClass('cleared');
//     $(this).parent().next().addClass('visible');
//     $(this).parent().next().next().addClass('exists');
// } );
// $('a.showall').click( function() {
// 	$('.portfolio').addClass('exists');
// 	$('.portfolio').addClass('portvisible');
// 	$('.outro').addClass('exists');
// 	$('.skipintro').addClass('hidden');
// } );
// $('a.skipintro').click( function() {
// 	$(this).addClass('hidden');
// 	$('.intro span').addClass('exists visible');
// 	$('.portfolio').addClass('exists');
// 	$('.portfolio').addClass('portvisible');
// 	$('.outro').addClass('exists');
// } );

// SMOOTH SCROLL
$(".smoothscroll").click(function(event) {
	event.preventDefault();
	$('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
	} 
);

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