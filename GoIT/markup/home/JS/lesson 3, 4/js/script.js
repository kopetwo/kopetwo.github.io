var test = {
	createElement: function (params) {
      var element = document.createElement(params.tagName);

      if(params.value){
      	element.setAttribute('value', params.value);
      }
      

      if (params.inputType) {
      	element.setAttribute('type', params.inputType);
      }

      if (params.classNameone || params.classNametwo) {
         element.classList.add(params.classNameone, params.classNametwo);
      }

       if(params.content){
      element.innerHTML = params.content;	
       }

       if(params.parentElement){
      params.parentElement.appendChild(element);
       }

      return element;
},
    questions: function (amount, variants) {

      for (var i = 0; i < amount; i++) {
      	this.createElement({
      	    tagName: 'h2',
	        parentElement: form,
            content: 'Вопрос №' + (i+1)
      	});

      for(var j = 0; j < variants; j++){
      	  var label = this.createElement({
      	    tagName: 'label',
	        parentElement: form, 
	        className: 'checkbox'
      	});
      	 this.createElement({
      	     tagName: 'input',
	         parentElement: label,
	         inputType: 'checkbox'
      	});
      	 this.createElement({
      	    tagName: 'span',
	        parentElement: label,
	        content: 'Вариант ответа №' + (j+1)
      	});    
      };
      };
    }
};

 var body = document.querySelector('body');

 var form = test.createElement({
	tagName: 'form',
	parentElement: body,
});


test.createElement({
	tagName: 'h1',
	parentElement: form,
    content: 'Тест по программированию'
});

test.questions(5, 3);


test.createElement({
	tagName: 'button',
	parentElement: form,
	inputType: 'submit',
	content: 'Проверить мои результаты',
    classNameone: 'btn',
    classNametwo: 'btna'

});

 


