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


});