$(function() {
	$('h1').css({'color':'blue'});
	$('h1').fadeOut('slow').fadeIn('slow');
	// $('div').hover(function() {
	// 	$(this).addClass('colorChange');
	// },function() {
	// 	$(this).removeClass('colorChange');
	// });
	$('.colored').mouseenter(function() {
		$(this).toggleClass('colorChange');
	});
	$('.colored').click(function() {
		$(this).clone(true).prependTo('#wrapper');
	});
	$('.colored').click(function() {
		$(this).animate({"margin-left":"+=1000px","opacity":0.02}, function () {
			$(this).remove();
		});
	});
});
