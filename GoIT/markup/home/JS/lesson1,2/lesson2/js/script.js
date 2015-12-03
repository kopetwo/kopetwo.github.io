function find(array, value) {
	for (var i = 0; i < arr.length; i++) {

		array.indexOf(value);
	};

	return array.indexOf(value);

};
var arr = [] ; 

for (var i = 0; i < 5; i++) {

	arr[i] = prompt('Enter list of names', ' '); 
};

var name = prompt('Enter user name', ' ');

var result = find(arr, name);

if(result != -1) {

	alert(name+', you have succesfully logged!');
} else {

	alert('Error!');
}
