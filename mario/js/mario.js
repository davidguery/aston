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
	$(document).keydown(function(e) {
		var offset = $('#mario').offset();
		switch (e.keyCode) {
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