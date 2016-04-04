function GoogleCallback(jobj, data) {

    var ul = document.createElement("ul");

    var results = $('.results');

    $.each(data.results, function(i, val) {

        var li = document.createElement("li");

        li.innerHTML = '<a href="' + val.url + '"><h3 class="title">' + val.title + '</h3></a> <p class="visibleUrl">'+val.visibleUrl+'</p> <p class="content">'+val.content+'</p>';                        

        ul.appendChild(li);

        console.log(val);
    });
    
    results.html(ul);
};

$(function() {

    function request() {

        var text = $('#text').val();

        $.ajax({
            // AJAX-specified URL
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + text + '&callback=GoogleCallback&context=?',
            dataType: "jsonp",

        });
    };

    $('.submit').on('click', request);

    $('#text').keypress(function(event) {

        if (event.which == 13) {
            request();
        }
    });


function Human (name, age, gender, height, weight) {

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;

}
// var human1 = new Human("Вася", "19","мужик", "170","70");
// var human2 = new Human("Коля", "17","мужик", "176","73");


function Worker (placeOfWork, salary) {
    this.placeOfWork = placeOfWork;
    this.salary = salary;
    this.work = function () {
        console.log('Работник работает');
    }
}
// var worker1 = new Worker("Luxoft","1000$");

// worker1.__proto__ = human1;
// Worker.prototype = Object.create(Human.prototype);

function Student (placeOfStudy, scholarShip) {
     /* body... */ 
     this.placeOfStudy = placeOfStudy;
     this.scholarShip = scholarShip;
     this.watch = function () {
        console.log('Студент смотрит сериал');
     }
 }

Worker.prototype = new Human;
Student.prototype = new Human;

var worker = new Worker;
var student = new  Student;

console.log('worker', worker);
console.log('student', student);

});