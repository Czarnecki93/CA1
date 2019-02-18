/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var n1, n2, result;

function setValues(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
}

function sum(){
    setValues();
    result = n1+n2;
    document.getElementById("resultfield").innerHTML += "The result of " + n1 + " + " + n2 + " = " + result + "<br>";
}

function sub(){
    setValues();
    result = n1-n2;
    document.getElementById("resultfield").innerHTML += "The result of " + n1 + " - " + n2 + " = " + result + "<br>";
}

function mult(){
    setValues();
    result = n1*n2;
    document.getElementById("resultfield").innerHTML += "The result of " + n1 + " * " + n2 + " = " + result + "<br>";
}

function div(){
    setValues();
    result = n1/n2;
    document.getElementById("resultfield").innerHTML += "The result of " + n1 + " / " + n2 + " = " + result + "<br>";
}