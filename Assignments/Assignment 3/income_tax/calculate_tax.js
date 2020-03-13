"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

function processEntry(){
    var income=parseFloat($("income").value);
    
    if(isNaN(income))
{
   alert("enter a number");
    $("income").value="";
     $("income").focus();
   }
else if (income <= 0)
    {
        alert("Enter a number greater than 0");
        $("income").value="";
         $("income").focus();
    }
else
    {
        calculateC(income);
    }
}

function calculateC(income){
    var tax=0;
    income= parseFloat(income);
    if(income<0 || income <=9275){
       tax= (income)*0.10;

    $("tax").value= tax;
        return;
    }
    else if(income<9275 || income <=37650){
        tax= (income-9275)*0.15;
        tax=tax+927.50;
    $("tax").value= tax;
        return;
    }
     else if(income<37650 || income <=91150){
         tax= (income-37650)*0.25;
        tax=tax+5183.75;
    $("tax").value= tax;
        return;
     }
     else if(income<91150 || income <=190150){
        tax= (18558.75+(28*income)/100);
    $("tax").value= tax;
        return;}
    else if(income<190150 || income <=413350){
        tax= (46278.75+(33*income)/100);
    $("tax").value= tax;
        return;}
    else if(income<413350 || income <=415050){
        tax= (119935.75+(35*income)/100);
    $("tax").value= tax;
        return;}
    else if(income>415050)
        {
     tax= (120529.75+(39.6*income)/100);
    $("tax").value= tax;
        return; 
        }
    
}


window.onload = function () {
    $("calculate").onclick = processEntry;
    $("income").focus();
};