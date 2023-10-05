var x = 10;
var y;
var result;

function Addition() {
   //x = document.getElementById("fv").value;
   y = document.getElementById("2").value;
   result = +x + +y;
   x = result
   document.getElementById("result").innerHTML = result;
   document.getElementById("1").innerHTML = result;
}

function Subtraction() {
   //x = document.getElementById("1").value;
   y = document.getElementById("2").value;
   result = +x - +y;
   x = result
   document.getElementById("result").innerHTML = result;
   document.getElementById("1").innerHTML = result;
}

function Multiplication() {
   //x = document.getElementById("1").value;
   y = document.getElementById("2").value;
   result = +x * +y;
   x = result
   document.getElementById("result").innerHTML = result;
   document.getElementById("1").innerHTML = result;
}

function Division() {
   //x = document.getElementById("1").value;
   y = document.getElementById("2").value;
   result = +x / +y;
   x = result
   document.getElementById("result").innerHTML = result;
   document.getElementById("1").innerHTML = result;
}

function Modulus() {
   //x = document.getElementById("1").value;
   y = document.getElementById("2").value;
   result = +x % +y;
   x = result
   document.getElementById("result").innerHTML = result;
   document.getElementById("1").innerHTML = result;
}