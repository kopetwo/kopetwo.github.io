var startButton = document.getElementById('start');
var clearButton = document.getElementById('clear');
var mainboard = document.querySelector('.mainboard');
var miliboard = document.querySelector('.miliboard');


var timerStart = 0;
var clickPauseTime = 0;
var pausePeriod = 0;
var period = 0;
var interval;

function Timer(){

	var self = this;

	self.currentTime = function () {
		var currDate = new Date();

		return (Date.now(currDate));
	}

	self.solveCounter = function() {

		var current = self.currentTime();

		period = current-timerStart-pausePeriod;

		self.updateCounter(period);
	}

	self.updateCounter = function (time) {

		var hours = Math.floor((time/3600000)%24);

		if(hours < 10){
			hours = '0'+ hours;
		}

		var minutes = Math.floor((time/60000)%60);

		if(minutes < 10){
			minutes = '0'+ minutes;
		}

		var seconds = Math.floor((time/1000)%60);

		if(seconds < 10){
			seconds = '0'+ seconds;
		}

		var milliseconds = Math.floor(time%1000);

		mainboard.innerHTML = hours + ':' + minutes + ':' + seconds;

		miliboard.innerHTML = milliseconds;


	}	

	self.pause = function () {

		startButton.innerHTML = 'Continue';

		clearInterval(interval);

		clickPauseTime = self.currentTime();

		startButton.removeEventListener('click', self.pause);

		startButton.addEventListener('click', timer.run);


	}

	self.clear = function () {

		clearInterval(interval);

		startButton.removeEventListener('click', self.pause);

		startButton.addEventListener('click', timer.run);

		startButton.innerHTML = 'Start'; 

		mainboard.innerHTML = '00:00:00';

		miliboard.innerHTML = '000';
	}
	



	self.run = function () {
		if(mainboard.innerHTML == '00:00:00'){

			timerStart = clickPauseTime = self.currentTime();
			pausePeriod = 0;

		}
		

		pausePeriod =  pausePeriod + self.currentTime() - clickPauseTime;

        interval = setInterval(self.solveCounter, 30);  

        startButton.innerHTML = 'Pause'; 

        startButton.removeEventListener('click', self.run);

        startButton.addEventListener('click', self.pause);


    }


};

var timer = new Timer();

startButton.addEventListener('click', timer.run);

clearButton.addEventListener('click', timer.clear);