"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds=elapsedMilliseconds+10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if(elapsedMilliseconds==1000){elapsedMilliseconds=0; elapsedSeconds=elapsedSeconds+1;}
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if(elapsedSeconds==60){elapsedSeconds=0;elapsedMinutes=elapsedMinutes+1;}
    //display new stopwatch time
    $("s_ms").innerHTML=elapsedMilliseconds;
    $("s_seconds").innerHTML=elapsedSeconds;
    $("s_minutes").innerHTML=elapsedMinutes;
};

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault;
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;        
    // do first tick of stop watch and then set interval timer to tick
    stopwatchTimer= setInterval(tickStopwatch,10);
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    
    
    //clearInterval(temp);
    // variable so next two functions can stop timer.
    
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault;
    // stop timer
    clearInterval(stopwatchTimer);
    
    
};

var resetStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault;
    // stop timer
    // reset elapsed variables and clear stopwatch display
    $("s_minutes").innerHTML="00";
    $("s_seconds").innerHTML="00";
    $("s_ms").innerHTML="000";
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $('start').onclick=startStopwatch;
    //setInterval(displayCurrentTime,1000);
    $('stop').onclick=stopStopwatch;
    $('reset').onclick=resetStopwatch;
};