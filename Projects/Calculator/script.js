function getDetail(){
    return document.getElementById("historyValue").value;
}
function printDetail(num){
    document.getElementById("historyValue").value = num;
}
function getEntry(){
    return document.getElementById("outputValue").value;
}
function printEntry(num){
    document.getElementById("outputValue").value=num;
}
//function formatNumber(num){
//    if(num=="-"){
//		return "";
//	}
//    var n = Number(num);
//    var value = n.toLocaleString("en");
//    return value;
//}
function reversedNum(num){
    var reverseNum = num.replace(/,/g,'')
    return reverseNum;
}
var opertr = document.getElementsByClassName("opr");
for(i=0;i<opertr.length;i++){
    opertr[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printDetail("");
            printEntry("");
        }
        else if(this.id == "backspace"){
            var output = reversedNum(getEntry()).toString();
            if(output){
                output= output.substr(0,output.length-1);
				printEntry(output);
            }
        }
//        else if(this.id == "exponent"){
//            var output = getEntry();
//            var history = getDetail();
//            if(output==""&&history!=""){
//				if(isNaN(history[history.length-1])){
//					history= history.substr(0,history.length-1);
//				}
//			}
//            if(output!="" || history!=""){
//				output= output==""?output:reversedNum(output);
//				history=history+output;
//				if(this.innerHTML=="="){
//					var result=Math.pow(((history.substr(0,1)), history.substr(history.length,1)));
//					printEntry(result); 
//					printDetail("");
//				}
//                else{
//					history=history+this.innerHTML;
//					printDetail(history);
//					printEntry("");
//				}
//            }
//        }
        else{
             output = getEntry();
            var history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
				if(this.innerHTML=="="){
                    if(history.includes("e")){
//                        var result = Math.pow(history.substr(0, 1), history.substr(history.length - 1, 1));
                        var result = Math.pow(history.substr(0, history.indexOf("e")), history.split("e")[1]);
                        printEntry(result);
					    printDetail("");
                    }
                    else{
                        result=eval(history);
					printEntry(result);
					printDetail("");
                    }
//					var result=eval(history);
//					printOutput(result);
//					printHistory("");
				}
                else{
					history=history+this.innerHTML;
					printDetail(history);
					printEntry("");
				}
            }
        }
    });
}

var functionOp = document.getElementsByClassName("func");
for(i=0;i<functionOp.length;i++){
    functionOp[i].addEventListener('click',function(){
        if(this.id == "sin"){
            var output = getEntry();
            var history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                var result = (Math.sin(history)).toFixed(3);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "cos"){
             output = getEntry();
             history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = (Math.cos(history)).toFixed(3);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "tan"){
            output = getEntry();
            history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = (Math.tan(history)).toFixed(3);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "squareRoot"){
            output = getEntry();
            history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = (Math.sqrt(history)).toFixed(3);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "log"){
             output = getEntry();
             history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = (Math.log(history)).toFixed(3);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "percentile"){
             output = getEntry();
             history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = (history/100);
                printEntry(result);
                printDetail("");
        }
        }
        if(this.id == "pi"){
            output = getEntry();
            history = getDetail();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output =="" || history ==""){
            result = parseFloat((Math.PI*1).toFixed(8));
                printEntry(result);
                printDetail("");
            }
            if(output!="" || history!=""){
				output= output==""?output:reversedNum(output);
				history=history+output;
                result = parseFloat((Math.PI*history).toFixed(8));
                printEntry(result);
                printDetail("");
        }
        }
        
    });
}
var number = document.getElementsByClassName("num");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       var output = reversedNum(getEntry());
        if(output!=isNaN){
            output = output+this.innerHTML;
            console.log(output)
            printEntry(output);
        }
    });
}

var par=document.getElementsByClassName("paranthesis");
for(var i=0;i<par.length;i++){
par[i].addEventListener('click',function(){
    if(this.id=="leftP"){
        var pO=reversedNum(getEntry()).toString();
        pO=pO+"(";
        console.log(pO)
        printEntry(pO);
    } 
    
  else if(this.id=="RightP"){
        pO=reversedNum(getEntry()).toString();
        pO=pO+")";
        console.log(pO)
        printEntry(pO);
        
      
    }
});

}


document.getElementById('calculatorForm').addEventListener('submit', function(e) {
     e.preventDefault();
 }, false);