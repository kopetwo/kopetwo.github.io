var a = prompt(' Enter the value that you want to erect in a degree ', ' ');
var b = prompt(' Enter the value of degree', ' ');

function pow( a, b ) {

	 var result = 1;

if(b > 0){

	for (var i = 0; i < b; i++) {

		result *= a;

	};
	
} else {
	if( b < 0 ) {
		for (var i = b; i < 0; i++) {
		var c = 1/a; // additional variable for case of negative b

		result *= c;
	};
	};
};

	return(result);
	
};

console.log(pow(a, b));

