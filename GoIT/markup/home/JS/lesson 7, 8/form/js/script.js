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

	$help.eq(index).stop(true, true).css('display', 'inline-block');

            },
 function(){
	var index = $input.index($(this));

	$help.eq(index).stop(true, true).css('display', 'none');

           });

$button.on('click', clickButton);
});
