/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];
var all = boys.concat(girls);

function getBoyNames() {

    var namesHTML = boys.map(function (name)
    {
        return name + "<br>";
    });

    document.getElementById("boys").innerHTML = namesHTML.join('');
};

function getGirlNames() {

    var namesHTML = girls.map(function (name)
    {
        return name + "<br>";
    });

    document.getElementById("girls").innerHTML = namesHTML.join('');
};

function getAllNames() {

    var namesHTML = all.map(function (name)
    {
        return name + "<br>";
    });

    document.getElementById("all").innerHTML = namesHTML.join('');
};

function loadAllNames(){
    getBoyNames();
    getGirlNames();
    getAllNames();
}

window.onload = loadAllNames();