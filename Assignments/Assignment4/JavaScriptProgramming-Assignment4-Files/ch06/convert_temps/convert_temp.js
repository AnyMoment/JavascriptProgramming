"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

function convertTemp(){

    var temp=parseFloat($("degrees_entered").value);

    if(isNaN(temp)){
        alert("numbers only");
        clearTextBoxes();
        $("degrees_entered").focus();
    }
    else{
    if($("to_celsius").checked){
       temp=(temp-32) * 5/9;
  temp=Math.round(temp);
        $("degrees_computed").value=temp;
    }

    if($("to_fahrenheit").checked){
        temp=(temp * 9/5) + 32;
        temp=Math.round(temp);
        $("degrees_computed").value=temp;
    }
    }
}

function toCelsius(){
  clearTextBoxes();
  $("degree_label_1").innerHTML="Enter F degrees";
    $("degree_label_2").innerHTML="Degrees Celsius";

}

function toFahrenheit(){
   clearTextBoxes();
    $("degree_label_1").innerHTML="Enter C degrees";
    $("degree_label_2").innerHTML="Degrees Farenheit";
}


window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};
