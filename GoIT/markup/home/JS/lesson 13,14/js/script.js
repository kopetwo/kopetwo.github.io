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

        for (var i = 0; i < questions.length; i++) {

            var $checkeded = $('.box' + i + ' input[type=checkbox]:checked').length;
            console.log($checkeded);

            // if ($checked == 0) {

            //     $('#checkButton').prop('disabled', true);

            // }
            if($checkeded == 0) { 

                alert('Вы ответили не на все вопросы');

                return false;

            }
        };


        for (var i = 0; i < questions.length; i++) {

            var $input = $('.box' + i + ' input:checkbox');

            var $checked = $('.box' + i + ' input[type=checkbox]:checked').length;

            for (var k = 0; k < questions[i].answer.length; k++) {

                if ($input[k].checked) {

                    var $id = $input.eq(k).attr("id");

                    if ($id == questions[i].rightAnswer && $checked <= 1) {

                        $('.modal-body').append('<div>Ответ на ' + (i + 1) + ' вопрос верен</div>');

                        $('.modal-title').empty();

                        $('.modal-title').html('Тест пройден успешно');

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


    $('#checkButton').on('click', checkAnswer);

});
