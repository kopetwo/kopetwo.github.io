$(function () {

var num = 252; 


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

});