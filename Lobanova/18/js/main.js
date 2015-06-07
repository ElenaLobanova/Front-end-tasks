	$(document).ready(function() {
	$('#scaleInput').change(function() {

		console.log($(this).val());

		var max = 10000;
		var scaleVal = $(this).val();

		if (isNaN(scaleVal)) {
			alert('Введите число');
			return false;
		} else if (scaleVal > max) {
			scaleVal = max;
		}

		scaleVal = scaleVal / (max / 100);
		$('#scale .filler').css('width', scaleVal + '%');

		$('#scale span.number').text(scaleVal / 100 * max);
	});





	$('#next').click(toNextElement);
	$('#prev').click(toPrevElement);

//Вариант а) от первого до последнего слайда, по достижению последнего листается только обратно

	var allElem = $('.gallery-element');
	var elemWidth = allElem[0].offsetWidth;
	var gallery = $('.gallery-wrapper ul');

	var possibleOffset = elemWidth*(allElem.length - 3);
	var ulOffset = parseInt( $(gallery).css('left'));

	function toNextElement() {
		if(ulOffset*(-1) < possibleOffset) {
			$(gallery).animate({left: '-=' + elemWidth + 'px'});
			ulOffset -= elemWidth;
		}
		return false;
	}

	function toPrevElement() {
		if(ulOffset < 0) {
			$(gallery).animate({left: '+=' + elemWidth + 'px'});
			ulOffset += elemWidth;
		}
		return false;
	}







		function toNextElement() {
		allElem = $('.gallery-element');
		$(gallery).animate({'left': '-' + elemWidth + 'px'}, 300, function() {
			allElem.eq(0).appendTo($(gallery));
			$(gallery).css({'left':'0px'});
		});
		return false;
	}

	function toPrevElement() {
		allElem = $('.gallery-element');
		allElem.last().prependTo($(gallery));
		$(gallery).css({'left': '-' + elemWidth + 'px'})
		$(gallery).animate({'left':'0px'}, 300);
		return false;
	}