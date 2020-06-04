var counter = 0;
var intput;
var length = 3;
var output = "";
var text;
alert(
    "Merken Sie sich die Ziffernfolge, die gleich erscheinen, \n" +
    "und geben Sie sie nachfolgend ein:\n" +
    "Es erscheinen nacheinander dreimal drei Ziffern," + 
    "dann dreimal vier\n Ziffern usw.\n" +
    "Sobald Sie eine Ziffernfolge falsch eingegeben haben, ist\n" +
    "das Ende des Trainings erreicht und es erfolgt eine Bewertung.\n" +
    "Wenn Sie die Internetseite aktualisieren, beginnt das Training\n" +
    "wieder von vorn."
)

//game
do{
    counter++;
    if(counter > 3){
        length++;
    }
    alert("Laenge: " + length + "\nCounter: " + counter);

    text = "";
    for(let i = 1; i <= length; i++){
        text += Math.floor(Math.random() * 10);
    }
    alert("Ziffernfolge: " + text);

    intput = prompt("Ihr Eingabe:");
    output += text + "<br>";

}while(intput == text);

//Stats
var result = length -1;
if(result < 3){
    result = 0;
}else {
    output += "Sie konnten sich " + result + " Ziffern merken";
    document.write(output);
}