$(document).ready( function () {

var $tab = $('.tab');
var $text = $('span');

function Tabclick () {
   // body

var index = $tab.index($(this));

  $text.hide();
  $text.eq(index).css('display', 'block');

};

$text.first().slideToggle(600);


$tab.click(Tabclick);

});
