//topic: try - catch
var y = 42;

try {
  document.write("X: " + x);
  document.write("Y: " + y);
} catch (e) {
    alert(e);
}finally{
    document.write("Finally wird auf jeden Fall ausgeführt.")
}