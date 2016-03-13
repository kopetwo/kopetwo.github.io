$(document).ready(function() {

    var form = $('#form').html();

    var data = {
        name: "Бидюк Александр Сергеевич",
        urlImg: 'img/YA.jpg',
        university: 'Студент, Киевский Политехнический Институт',
        firstReason: 'Хочу работать',
        secondReason: 'Не нравится университет',
        thirdReason: 'Нравится фронтенд',
        telephone: '+380503122139',
        urlVk: 'vk.com',
        feedback: 'Научу кататься на роликах',
    };

    var content = tmpl(form, data);

    $('body').append(content);
});
