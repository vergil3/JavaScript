//topic: on error function
var y = 42;

function info(error,file,row){
    alert("Fehler: " + error + "\nDatei: " + file + "\nZeile: " + row);
}
window.onerror = infoy;
document.write("X: ", x + "<br>");
document.write("Y: ", y + "<br>");