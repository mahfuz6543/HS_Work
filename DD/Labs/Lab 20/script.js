var x;
var y;
var result;

function greater() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x + +y;
    document.getElementById("result").innerHTML = x>y;
}

function less() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x - +y;
    document.getElementById("result").innerHTML = x<y;
}

function equal() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x * +y;
    document.getElementById("result").innerHTML = x==y;
}

function gtrEq() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x / +y;
    document.getElementById("result").innerHTML = x>=y;
}

function lssEq() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x % +y;
    document.getElementById("result").innerHTML = x<=y;
}

function notEqual() {
    x = document.getElementById("first_num").value;
    y = document.getElementById("second_num").value;
    //result = +x % +y;
    document.getElementById("result").innerHTML = x!=y;
}