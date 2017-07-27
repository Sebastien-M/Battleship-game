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
            tablename[x][y].addEventListener('mouseover', function () {
                try {
                    if (tablename[x][y].style.backgroundColor === "green" && tablename[x][y].style.opacity === "1" ||
                            tablename[x + 1][y].style.backgroundColor === "green" && tablename[x + 1][y].style.opacity === "1") {
                        return;
                    } else {
                        document.body.querySelector(".error").textContent = "";
                        tablename[x][y].style.backgroundColor = "green";
                        tablename[x][y].style.opacity = 0.5;
                        tablename[x + 1][y].style.backgroundColor = "green";
                        tablename[x + 1][y].style.opacity = 0.5;
                    }
                } catch (e) {
                    document.body.querySelector(".error").textContent = "Impossible de placer un bateau ici";
                }
//                tableboats.push([x, y]);
            });
//            Mouseleave
            tablename[x][y].addEventListener('mouseout', function () {
                try {
                    if (tablename[x][y].style.backgroundColor === "green" && tablename[x][y].style.opacity === "1" ||
                            tablename[x + 1][y].style.backgroundColor === "green" && tablename[x + 1][y].style.opacity === "1") {
                        return;
                    } else {
                        tablename[x][y].style.backgroundColor = "darkblue";
                        tablename[x][y].style.opacity = 1;
                        tablename[x + 1][y].style.backgroundColor = "darkblue";
                        tablename[x + 1][y].style.opacity = 1;
                    }
                } catch (e) {
                }
//                tableboats.push([x, y]);
            });
            tablename[x][y].addEventListener('click', function () {
                tablename[x ][y].style.backgroundColor = "green";
                tablename[x ][y].style.opacity = "1";
                tablename[x + 1][y].style.backgroundColor = "green";
                tablename[x + 1][y].style.opacity = "1";
            });
        }
    }
}



