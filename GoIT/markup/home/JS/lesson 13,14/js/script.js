'use strict'

$(function() {

    var info = [{
        question: "Вопрос #1 Какого цвета небо?",
        answer: ["Голубого", "Красного", "Зеленого"],
        rightAnswer: 0 //index of the right answer
    }, {
        question: "Вопрос #2 Какого цвета трава?",
        answer: ["Красного", "Зеленого", "Синего"],
        rightAnswer: 1
    }, {
        question: "Вопрос #3 Сколько будет 2+2",
        answer: ["3", "2", "4"],
        rightAnswer: 2
    }];



    localStorage.setItem('data', JSON.stringify(info));

    var questions = JSON.parse(localStorage.getItem('data'));

    var questionsGenerate = $('#questionsGenerate').html();

    var content = tmpl(questionsGenerate, {
        data: questions
    });

    $('.questions').append(content);



    function checkAnswer() {

        $('.modal-body').empty();
        // $('.modal-title').empty();
        $('.modal-title').html('Тест пройден успешно');

        for (var i = 0; i < questions.length; i++) {

            var $inputs = $('.box' + i + ' input:checkbox');

            var $checked = $('.box' + i + ' input[type=checkbox]:checked').length;

            for (var k = 0; k < questions[i].answer.length; k++) {

                if ($inputs[k].checked) {

                    var $id = $inputs.eq(k).attr("id");

                    if ($id == questions[i].rightAnswer && $checked <= 1) {

                        $('.modal-body').append('<div>Ответ на ' + (i + 1) + ' вопрос верен</div>');

                    } else {

                        $('.modal-body').append('<div>Ответ на ' + (i + 1) + ' вопрос не верен</div>');

                        $('.modal-title').empty();

                        $('.modal-title').html('Тест пройден не успешно');

                        break;
                    }
                }
            };
        };
    };


    $('.modal-backdrop').on('click', function() {

        $('.modal-body').empty();

        $('.modal-title').empty();
    });

    $('#checkButton').on('click', checkAnswer);

});
