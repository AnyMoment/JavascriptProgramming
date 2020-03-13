var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function displayResults(){
    /*
    var iDiv = document.createElement('div');
    iDiv.id = 'results';
    var ih2= document.createElement('H2');
    ih2.id="h2";
    //$("h2").innerHTML="Results";
    var text="Results";
    var t = document.createTextNode(text);
    ih2.appendChild(t);
    document.body.appendChild(ih2);

    var ip= document.createElement('p');
        */
    $("results").innerHTML="<h2>Results</h2>";
    var sum=0;
    var high=0;
    var flag="";
    for(var i=0;i<scores.length;i++){
        sum=sum+parseInt(scores[i]);
        var counter= parseInt(scores[i]);
        if (high < counter){
            high=counter;
            flag=i;
        }
                }

   var avg= (sum/scores.length);
   $("results").innerHTML+="<p>The average score "+avg+"</p>";
    $("results").innerHTML+="<p>"+names[flag]+" has highest score of "+high+"</p>";
}

function addScore(){

    var score=$("score").value;
    var name=$("name").value;
    if(isNaN(score)||name==""){
        alert("Numbers only and name cannot be empty");
    }
    else{
        names.push(name);
        scores.push(score);
    }}

function displayScores(){}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


