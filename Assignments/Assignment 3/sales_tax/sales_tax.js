/*jslint es6:true*/
"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

function processEntries(){
     var subTotal=parseFloat($("subtotal").value);
    subTotal=subTotal.toFixed(2);
     var taxRate=parseFloat($("tax_rate").value);
      taxRate=taxRate.toFixed(2);
    
    if (isNaN(subTotal) || isNaN(taxRate)) {
        alert("enter Numbers only");
            }
else if ((subTotal <= 0 || subTotal >= 10000) ) {
        alert("Subtotal must be > 0 and < 10000 Tax");
        } 
else if (taxRate <= 0 || taxRate >= 12 ) {
     alert("Rate must be > 0 and < 12");
}    
    else {
        var salesTax= parseFloat(((subTotal * taxRate)/100));
       salesTax=salesTax.toFixed(2);
        $("sales_tax").value=salesTax;
        salesTax=parseFloat(salesTax);
        subTotal=parseFloat(subTotal);
        var total1=parseFloat((salesTax + subTotal));
        total1 =total1.toFixed(2);
        $("total").value=total1;
}
    
}

function clear1(){
     $("subtotal").value="";
    $("tax_rate").value="";
    $("sales_tax").value="";
    $("total").value="";
    
}

function subtotalC(){
     $("subtotal").value="";
}

function taxRateC(){
    $("tax_rate").value="";
}

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("subtotal").focus();
    $("clear").onclick= clear1;
    $("subtotal").onclick= subtotalC;
    $("tax_rate").onclick=taxRateC;
};