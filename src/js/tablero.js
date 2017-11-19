//Imports de la aplicación
import _ from 'lodash';
import {tablero} from './pantalla.js';
import {Casilla} from './casilla.js';
import {prueba} from './app.js';


export var casillas=[];
export function crearTablero() { // Función que genera el tablero
    tablero();
    let tamanyo = selDificultad(this.id);
    let bomba = dameNumBomb(this.id);

    let num = 1;
    // Obtenemos el padre
    let padre = document.getElementById("tablero");
    // Creamos el tablero
    let tabla = document.createElement("table");
    // Colgamos la tabla del padre
    padre.appendChild(tabla);

    for (var i = 0; i < tamanyo; i++) {
        casillas[i] = [];
        let linea = document.createElement("tr");
        tabla.appendChild(linea);
        for (var j = 0; j < tamanyo; j++) {
            let columna = document.createElement("td");
            columna.setAttribute("id", i+"_"+j);
            linea.appendChild(columna);
            let imagen = document.createElement("img");
            imagen.setAttribute("id", "img"+i+"_"+j);
            imagen.setAttribute("src", "img/i0.png");
            columna.appendChild(imagen);
            let nombre = "casilla"+i+"_"+j;
            nombre = new Casilla(10, i, j);
            casillas[i][j] = nombre;
        }
    }
    crearListeners(tamanyo,casillas);
    console.log("Terminado listeners")
    crearBombas(tamanyo, bomba, casillas);
    console.log("Terminado bombas");
    numerarTabla(tamanyo);
    console.log("Creación de todo terminado");

}

function crearBombas(tamanyo, bomba, casillas){
    let i = 0;
    do{
        let x = _.random(0, tamanyo-1);
        let y = _.random(0, tamanyo-1);

        if(casillas[x][y].Valor != 11){
            casillas[x][y].setImagen(11);
            i++;
            console.log(x + " x " + y);
        }


    }while(i < bomba);
}

function numerarTabla(tamanyo){
    for(var i = 0; i < tamanyo; i++){
        for(var j = 0;j < tamanyo; j++){

            var numBomb = 0;

            let x = i;
            let y = j;


            if(casillas[x][y].Valor != 11){
                numBomb = contarBombas(x, y, casillas, tamanyo);
                casillas[x][y].setImagen(numBomb);
            }
        }
    }
}

function contarBombas(x, y,casillas, tamanyo){

    let num = 0;

    if(x-1 >= 0 && y-1 >= 0){// 1
        console.log("1");
        if(casillas[x-1][y-1].Valor == 11){
            num++;
        }
    }
    if(x-1 >= 0){// 2
        console.log("2");
        if(casillas[x-1][y].Valor == 11){
            num++;
        }
    }
    if(x-1 >= 0 && y+1 < tamanyo){//3
        console.log("3");
        if(casillas[x-1][y+1].Valor == 11){
            num++;
        }
    }
    if(y-1 >= 0){//4
        console.log("4");
        if(casillas[x][y-1].Valor == 11){
            num++;
        }
    }
    if(y+1 < tamanyo){//5
    console.log("5");
        if(casillas[x][y+1].Valor == 11){
            num++;
        }
    }
    if(x+1 < tamanyo && y-1 >= 0){//6
        console.log("6");
        if(casillas[x+1][y-1].Valor == 11){
            num++;
        }
    }
    if(x+1 < tamanyo){//7
        console.log("7");
        if(casillas[x+1][y].Valor == 11){
            num++;
        }
    }
    if(x+1 < tamanyo && y+1 < tamanyo){//8
        console.log("8");
        if(casillas[x+1][y+1].Valor == 11){
            num++;
        }
    }
    return num;

}

function crearListeners(tamanyo,casillas){

    for(var i = 0; i < tamanyo; i++){
        for(var j = 0; j < tamanyo; j++){
            document.getElementById(i+"_"+j).addEventListener("click",coords , false);
        }
    }
}

function coords(){
    let x = this.id.charAt(0);
    let y = this.id.charAt(2);
    let valor = casillas[x][y].Valor;

    document.getElementById("img"+x+"_"+y).setAttribute("src", "img/i"+valor+".png");

    casillas[x][y].clickCasilla(x, y);
}


function selDificultad(dif) { // Función para obtener el tamaño de la tabla a partir de la dificultad
    var tamanyo;
    if (dif == 'normal') {
        tamanyo = 8;
    } else {
        tamanyo = 10;
    }
    return tamanyo;
}

 function dameNumBomb(dif) { // Función para obtener el número de bombas
    var bomba;
    if (dif == 'normal') {
        bomba = 10;
    } else {
        bomba = 15;
    }
    return bomba;
}


export function expandirAgua(x, y){
    let tamanyo =8;
        console.log(x+" x "+y);
    if(x-1 >= 0 && y-1 >= 0){// 1
        if(casillas[x-1][y-1].Valor == 0){
            document.getElementById("img"+(x-1)+"_"+(y-1)).src = "img/i10.png";
            expandirAgua(x-1, y-1);
        }
    }
    if(x-1 >= 0){// 2
        if(casillas[x-1][y].Valor == 0){
            document.getElementById("img"+(x-1)+"_"+y).src = "img/i10.png";
            expandirAgua(x-1, y);
        }
    }
    if(x-1 >= 0 && y+1 < tamanyo){//3
        if(casillas[x-1][y+1].Valor == 0){
            document.getElementById("img"+(x-1)+"_"+(y+1)).src = "img/i10.png";
            expandirAgua(x-1, y+1);
        }
    }
    if(y-1 >= 0){//4
        if(casillas[x][y-1].Valor == 0){
            document.getElementById("img"+x+"_"+(y-1)).src = "img/i10.png";
            expandirAgua(x, y-1);
        }
    }
    if(y+1 < tamanyo){//5
        if(casillas[x][y+1].Valor == 0){
            document.getElementById("img"+x+"_"+(y+1)).src = "img/i10.png";
            expandirAgua(x, y+1);
        }
    }
    if(x+1 < tamanyo && y-1 >= 0){//6
        if(casillas[x+1][y-1].Valor == 0){
            document.getElementById("img"+(x+1)+"_"+(y-1)).src = "img/i10.png";
            expandirAgua(x+1, y-1);
        }
    }
    if(x+1 < tamanyo){//7
        if(casillas[x+1][y].Valor == 0){
            document.getElementById("img"+(x+1)+"_"+(y)).src = "img/i10.png";
            expandirAgua(x+1, y);
        }
    }
    if(x+1 < tamanyo && y+1 < tamanyo){//8
        if(casillas[x+1][y+1].Valor == 0){
            document.getElementById("img"+(x+1)+"_"+(y+1)).src = "img/i10.png";
            expandirAgua(x+1, y+1);
        }
    }
}
