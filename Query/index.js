function fun1(a) {
    if (a == 1) {
        document.getElementById("gender").innerHTML = document.getElementById("male").innerText;
        disp("male");
    } else {
        document.getElementById("gender").innerHTML = document.getElementById("female").innerText;
        disp("female");
    }
}

function disp(id) {
    var T = document.getElementById(id),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function m12() {
    disp("female");
    document.getElementById("gender").innerHTML = document.getElementById("m2").innerHTML;

}

function imgg() {

}