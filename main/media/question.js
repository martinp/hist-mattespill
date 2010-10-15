$(function() {
	$('.simple_button').click(function() {
		$.ajax({
			type: 'POST',
			url: '/answer/',
			dataType: 'json',
			data: {answer: $('input[name=answer]').val()},
			success: function(data, textStatus) {
				$('#num_points').text(data.points);

				if (data.correct) {
					$('#wrong_answer').hide();
					$('#correct_answer').fadeIn();
				}
				else {
					$('#correct_answer').hide();
					$('#wrong_answer').fadeIn();
				}

				if (data.index < 0) {
					$('#question_wrapper').html('<p>Du er ferdig med dette fors&oslash;ket!</p><p class="start_button_container"><span class="simple_button">Tilbake til rommet!</span></p>'); // FIX
				}
				else {
					$('input[name=answer]').val('');
					$('#question_index').text(data.index);
					$('#question_text').text(data.question);
				}
			},
			error: function(XMLHttpRequest, textStatus) {
				alert('Det oppstod en feil');
			}
		});
	});
})