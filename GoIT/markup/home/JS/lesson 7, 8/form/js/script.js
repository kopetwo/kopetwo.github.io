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

	$help.eq(index).css('display', 'inline-block');

            },
 function(){
	var index = $input.index($(this));

	$help.eq(index).css('display', 'none');

           });

$button.on('click', clickButton);
});
