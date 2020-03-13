"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
 var date=new Date();
    
//get date and time values    
    var hours=date.getHours()+4;
    var minutes=date.getMinutes();
    var sec= date.getSeconds();
    var ampm="AM";
    
//validations

    if(hours>=12){    
    hours=hours-12;
    ampm="PM";
        
    }


//set date
hours=padSingleDigit(hours);
minutes=padSingleDigit(minutes);
sec=padSingleDigit(sec);     
$("hours").innerHTML=hours;
$("minutes").innerHTML=minutes;
$("seconds").innerHTML=sec;
$("ampm").innerHTML=ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
setInterval(displayCurrentTime,1000);
displayCurrentTime();
}; 