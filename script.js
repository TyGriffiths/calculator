(function() {
	$('.printable').on('click', startCal)
	function startCal() {
//search slice(-1) to see if it can prevent user from entering -- back to back
	
	var countClicks = 0;
	
	$('span').on('click', function() {

		switch ($(this).text()) {
		case '-':
			if (countClicks >= 2) {

				}
				else {
					countClicks++;
					takeAction($(this).text());
				}
			break;
		default:
			takeAction($(this).text());
			countClicks = 0;
		}

			function takeAction() {
			var symbolOptions = ['+', '*', '/', '.'];
			var formula1 = $('#answer-box').text().slice(0,-1);
			if ($(this).hasClass('symbol') && symbolOptions.indexOf($('#answer-box').text().slice(-1)) > -1) {
				formula1 += $(this).text();
				$('#answer-box').html(formula1);
			}
			else {
				$('#answer-box').append($(this).text());
			}
		}

		$('#equals').on('click', function() {		
			var userInput = $('#answer-box').text();
			var refineInput = userInput.replace(/--/g, '+');
			var inputNum = eval(refineInput);
			$('#answer-box').html(inputNum);
		})

		$('#reset').on('click', function() {
			$('#answer-box').html('');
		})
			
	})

	console.log(countClicks);

	
	}
})();

/*alternative to switch statement
if ($(this).text() === '-') {
				if (countClicks >= 2) {

				}
				else {
					countClicks++;
					takeAction();
				}	
			}			
		else {
			takeAction();
		}*/