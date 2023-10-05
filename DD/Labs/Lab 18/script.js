function Add(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
      
     document.getElementById("result").value = (Number(x)+Number(y))
  }
  function Sub(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
      
     document.getElementById("result").value = (x - y);
  }
  function Mul(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
      
     document.getElementById("result").value = (x * y);
  }
  function Divide(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
      
     document.getElementById("result").value = (x / y);
  }