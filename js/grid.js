/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mapjoueur = [];
var mapennemy = [];
let playermap = createMap("map", mapjoueur);
let ennemymap = createMap("map2", mapennemy);
let playerboats = [];
event(playermap, playerboats);

function createMap(tagname, mapplayer) {
    for (let x = 0; x <= 9; x++) {
        mapplayer[x] = [];
        for (let y = 0; y <= 9; y++) {
            let div = document.createElement("div");
            div.style.height = "30px";
            div.style.width = "30px";
            div.className = "mapBlock";
            div.id = "x" + x + "y" + y;
            mapplayer[x][y] = div;
            document.body.querySelector("." + tagname).appendChild(div);
        }
    }
    return mapplayer;
}

function event(tablename, tableboats) {
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            let div = tablename[x][y].addEventListener('click', function () {
                console.log(tablename[x][y]);
                tablename[x][y].style.backgroundColor = "green";
                console.log("x: " + x + " y: " + y);
                tableboats.push([x, y]);
            });
        }
    }
}



