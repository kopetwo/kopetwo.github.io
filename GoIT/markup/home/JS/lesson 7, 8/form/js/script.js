$(document).ready( function () {

var $input = $("input[type = 'text']");
var $help = $('.help');
var $button = $('button');



function clickButton () {
	
	$help.show();
}

$input.hover(
 function (){
	var index = $input.index($(this));

	$help.eq(index).stop(true, true).fadeIn(500).css('display', 'inline-block');

            },
 function(){
	var index = $input.index($(this));

	$help.eq(index).stop(true, true).fadeOut(500).css('display', 'none');

           });

$button.on('click', clickButton);
});
