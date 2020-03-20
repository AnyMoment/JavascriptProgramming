"use strict"
$(document).ready(function() {    document.getElementById("arrival_date").focus();

$("#reservation_form").submit(
    function(event){
        
var isValid=true;

//textboxes
//arrivals
var arrivals=$("#arrival_date").val().trim();
var arrivalP=/^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/;
if(arrivals==""){$("#arrival_date").next().text("Date cannot be empty");isValid=false;}
/*        
else if(!arrivalP.test(arrivals)){
$("arrival_date").next().text("Format is MM/DD/YYYY(1900-2999)");
//("arrival_date").val(arrivals);
isValid=false;
} */
else $("#arrival_date").next().text("");
//name
var name1=$("#name").val().trim();
var namePattern=/^[A-Za-z]{6,}$/;
if(name1==""){
$("#name").next().text("This field is required.");
isValid=false;
}
else if(!namePattern.test(name1)){
        $("#name").next().text("enter a valid name atleast 6 chars");
    isValid=false; 
    $("#name").val(name1);
}
else {
    $("#name").next().text("");
}
//nights
var nightsPattern= /^[0-9]+$/;
var nights=($("#nights").val().trim());
if(nights==""){
$("#nights").next().text("This field is required.");
isValid=false;
//alert("inside");
$("#nights").val(nights);
}
else if(!nightsPattern.test(nights))
{ 
   // alert(nightsPattern.test(nights));
    $("#nights").next().text(" Numeric values only"); isValid=false;
    $("#nights").val(nights);
}
 else{
    $("#nights").next().text("");
}
//Phone
var phone=$("#phone").val().trim();
if (phone==""){
    isValid=false;
    $("#phone").next().text("This field is required.");
}
else{
    $("#phone").next().text("");
}

        
//email 
var emailPattern =
/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
var email = $("#email").val().trim();
if (email == "") {
$("#email").next().text("This field is required.");
isValid = false;
} else if ( !emailPattern.test(email) ) {
$("#email").next().text("Must be a valid email address.");
isValid = false;
$("#email").val(email);
} else {
$("#email").next().text("");
}

 

        
        
if(isValid==false){event.preventDefault();}
    
    }
);//end submit
    
}); 
// end ready