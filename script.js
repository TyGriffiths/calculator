$(document).ready(function(){
	var countClicks = 0;
	
	$('.printable, .equals').on('click', function(event) {
		event.stopPropagation();
		var hasSymbolClass = $(this).hasClass('symbol');
		var hasMinusId = $(this).hasClass('minus');
		if (hasSymbolClass || hasMinusId) {
				if (countClicks >= 2) {
				}
				else {
					countClicks++;
					takeAction($(this));
				}	
			}			
		else {
			countClicks = 0;
			takeAction($(this));
		}	
	});

	function takeAction(action) {
		var symbolOptions = ['+', '*', '/', '.'];
		var formula1 = $('#answer-box').text().slice(0,-1);
		var hasSymbolClass = action.hasClass('symbol');
		var answerBoxText = $('#answer-box').text();
		var lastChar = answerBoxText.slice(-1);
		var symbolExists = symbolOptions.indexOf(lastChar) > -1;
		var actionText = action.text();
		var replaceZero = $('#answer-box').text();
		if (actionText === '=') {
			evaluate();
		}
		else if(replaceZero === '0' && !hasSymbolClass) {
			$('#answer-box').html(actionText);
		}
		else if (lastChar === '/' && actionText === '0') {
			alert('Dividing by 0 is a big NO No in math. Try again');
		}
		else {
			if (hasSymbolClass && symbolExists) {
				formula1 += action.text();
				$('#answer-box').html(formula1);
				countClicks = 1;
			}
			else {	
				$('#answer-box').append(actionText);
			}
		}
	}

	function evaluate() {		
		var userInput = $('#answer-box').text();
		var refineInput = userInput.replace(/--/g, '+');
		var inputNum = eval(refineInput);
		$('#answer-box').html(inputNum);
	}

	$('#reset').on('click', function() {
		$('#answer-box').html('0');
	});
});


