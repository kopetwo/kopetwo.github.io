$(document).ready( function () {

var $input = $("input[type = 'text']");
var $help = $('.help');
var $button = $('button');


function inputHover () {
   // body
  	var index = $input.index($(this));

	$help.eq(index).css('display', 'inline-block');


};

function inputOut () {

	$help.hide();
}

function clickButton () {
	
	$help.show();
}

$input.mouseover(inputHover);
$input.mouseout(inputOut);
$button.on('click', clickButton);
});
