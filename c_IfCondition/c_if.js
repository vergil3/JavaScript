document.write("IF Anweisungen");

var a = 32;
var b = 12;

//1.
if(a > b){
    console.log("FIRST");
}

//2.
if(a > b){
    console.log("SECOND");
}else {
    console.log("SECOND ELSE");
}

//3.
if(a > b){
    console.log("THIRD");
}else if(b < a){
    console.log("THIRD ELSE IF");
}

//Bedingte Bewertung
var compair = (a > b) ? a : b;
document.write("The following number is the bigger one " + compair);

//confirm method
var answer = confirm("Do you want do quit this diaogue?");
if(answer){
    alert("TRUE CONDITION");
}else {
    alert("FALSE CONDITION");
}