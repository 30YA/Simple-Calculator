"use strict";
function addtodis(value) {
    document.getElementById("display").value += value;
};
function final() {
    if (document.getElementById("display").value != "") {
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("^","**");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("÷","/");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("×","*");
        document.getElementById("display").value = eval(document.getElementById("display").value)
    }
};
function delett() {
    document.getElementById("display").value = "";
}
function mathCal() {
    const val = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(val);
}
// function tavann(value) {
//     document.getElementById("display").value += value;
// }