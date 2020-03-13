var $ = function(id) {
    return document.getElementById(id);
};

function processEntries(){
    
var cents= parseInt($("cents").value);

if(isNaN(cents))
{
   alert("enter a number");
   }
else if (cents <= 0 || cents >=99)
    {
        alert("Enter a number between 0 and 99");
    }
else
    {
        calculateC(cents);
    }
}

function calculateC(cents){
    var residue=0;
    var quarters= parseInt(cents/25);
    $("quarters").value= quarters;
    residue= cents%25;
    if (residue<5){
        $("pennies").value= residue;
        return;
    }
    
    var dime= parseInt(residue/10);
     $("dimes").value= dime;
    residue= cents%10;
    if (residue<5){
        $("pennies").value= residue;
        return;
    }
    
    var nickels= parseInt(residue/5);
     $("nickels").value= nickels;
    residue= cents%5;
    if (residue<5){
        $("pennies").value= residue;
        return;
    }
    }






window.onload = function () {
    $("calculate").onclick = processEntries;
    $("cents").focus();
    
};