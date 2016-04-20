
/*Make Mario move forward*/
var moveForward = function() {
	// $('#mario').removeClass('reverse')
	// 	.animate({
	// 		"left": '+=10px'
	// 	}, 50)
	// 	.removeClass('mario_stand').addClass('mario_run');
	$('#mario').addClass('forward')
		.removeClass('reverse')
		.removeClass('mario_stand')
		.addClass('mario_run');
};

/*Make Mario move backward*/
var moveBackward = function() {
	// $('#mario').addClass('reverse')
	// 	.animate({
	// 		"left": '-=10px'
	// 	}, 50)
	// 	.removeClass('mario').addClass('mario_run');
	$('#mario').addClass('backward')
		.addClass('reverse')
		.removeClass('mario_stand')
		.addClass('mario_run');
};

/*Make mario jump!*/
var jump = function() {
	$('#mario').animate({
		"bottom": "+=100px"
	}, 130, function() {
		$('#mario').animate({
			"bottom": "-=100px"
		}, 130);
	});
	sound = document.getElementById('jumpSound');
	sound.play();
};

/*Stop Mario moving*/
var stopMoving = function() {
	var offset = $('#mario').offset();
	var bgPositionStage = $('#stage').css('backgroundPosition');
	var bgPositionFloor = $('#floor').css('backgroundPosition');
	$('#mario').removeClass('forward')
		.removeClass('backward')
		.removeClass('mario_run')
		.addClass('mario_stand')
		.offset({
			left: offset.left
		});
	$('#stage').removeClass('translate-bg-left')
		.css('backgroundPosition', bgPositionStage);
	$('#floor').removeClass('translate-bg-right')
		.css('backgroundPosition', bgPositionFloor);
};

/*Make backgroud move and mario stop*/
var moveBackground = function() {
	var offset = $('#mario').offset();
	$('#mario').removeClass('mario_run')
		.addClass('mario_run')
		.removeClass('forward')
		.removeClass('backward')
		.offset({
			left: offset.left
		});
	$('#stage').addClass('translate-bg-left');
	$('#floor').addClass('translate-bg-right');
};

$(function() {
	var down = [];
	/*Key binding for Mario's moves*/
	$(document).keydown(function(e) {
		var offset = $('#mario').offset();
		switch (e.keyCode) {
			/*Right*/
			case 39:
				if (offset.left >= $('#mario_wrapper').innerWidth()) {
					moveBackground();
				} else {
					if (down[e.keyCode] == null) {
						moveForward();
						down[e.keyCode] = true;
					};
				}
				break;

			/*Left*/
			case 37:
				if (offset.left <= $('#mario_wrapper').offset().left + 10) {
					stopMoving();
				} else {
					if (down[37] == null) {
						moveBackward();
						down[e.keyCode] = true;
					};
				}
				break;

			/*Up*/
			case 38:
				if (down[38] == null) {
					jump();
					down[e.keyCode] = true;
				}
				break;

			default:
				return;
		}
	});

	/*Key binding for Mario to stop*/
	$(document).keyup(function(e) {
		if (e.keyCode == 39 || e.keyCode == 37) {
			// $('#mario').stop()
			// 	.removeClass('mario_run').addClass('mario_stand');
			// $('#mario').removeClass('forward')
			// 	.removeClass('backward')
			// 	.removeClass('mario_run')
			// 	.addClass('mario_stand')
			// 	.offset({
			// 		left: offset.left
			// 	});
			stopMoving();
			//console.log(offset.left);
			e.preventDefault();
		};
		down[e.keyCode] = null
	});
});