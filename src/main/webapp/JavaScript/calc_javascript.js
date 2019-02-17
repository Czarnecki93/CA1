/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var buttons = document.getElementById("buttons");
var display = document.getElementById("display");

buttons.onclick = showOnDisplay;

function showOnDisplay(e) {
    var btn = e.target.innerHTML;
    if (btn === "=") {
        display.innerHTML = eval(display.innerHTML);
    } else if (btn === "CLEAR") {
        display.innerHTML = "";
    } else
        display.innerHTML += btn;
}