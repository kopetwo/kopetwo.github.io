'use strict'

$(function() {

    var info = [{
        question: "Вопрос #1 Как я знаю JS",
        answer: ["Плохо", "Оч плохо", "Оч оч плохо"],
        rightAnswer: 2 //index of the right answer
    }, {
        question: "Вопрос #2",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3"],
        rightAnswer: 1
    }, {
        question: "Вопрос #3",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3"],
        rightAnswer: 0
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
