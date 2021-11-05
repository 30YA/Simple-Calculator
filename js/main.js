"use strict";
function addtodis(value) {
    if (value == "0" && document.getElementById("display").value == "0") {
        document.getElementById("display").value == "0";
    }
    else{
        if ((value == "." || value == "+" || value == "-" || value == "×" || value == "÷" || value == "^") && document.getElementById("display").value == "") {
            document.getElementById("display").value = "";
        }
        else{
            document.getElementById("display").value += value;
        }
    }
};
function final() {
    if (document.getElementById("display").value != "") {
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("^","**");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("÷","/");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("×","*");
        document.getElementById("display").value = eval(document.getElementById("display").value)
    }
    if (document.getElementById("display").value == "Infinity") {
        document.getElementById("display").value = "not'work";
    }
};
function delett() {
    document.getElementById("display").value = "";
}
function mathCal(value) {
    if (document.getElementById("display").value != "") {
        const val = document.getElementById("display").value;
        document.getElementById("display").value = Math[value](val);
    }
}
// function tavann(value) {
//     document.getElementById("display").value += value;
// }