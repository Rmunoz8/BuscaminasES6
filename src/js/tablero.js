//Imports de la aplicación

import {tablero} from './pantalla.js';
import {Casilla} from './casilla.js';
import {prueba} from './app.js';


export var casillas=[];
export function crearTablero() { // Función que genera el tablero
    tablero();
    let tamanyo = selDificultad(this.id);

    let num = 1;
    let padre = document.getElementById("tablero");
    let tabla = document.createElement("table");
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

           columna.innerHTML = i+","+j;
            let nombre = "casilla"+i+"_"+j;
            nombre = new Casilla("img/Bloque.png", i, j);
//            imagen.setAttribute("id","imagen-"+nombre.CoordX+"_"+nombre.CoordY);
//            imagen.src = nombre.Valor;
//            columna.appendChild(imagen);
//            nombre.getCoordenada();
            casillas[i][j] = nombre;

        }
    }
    casillas[0][1].getCoordenada();
    crearListeners(tamanyo,casillas);

}

function crearListeners(tamanyo,casillas){

    for(var i = 0; i < tamanyo; i++){
        for(var j = 0; j < tamanyo; j++){
            document.getElementById(i+"_"+j).addEventListener("click",coords , false);
        }
    }
}

function coords(){
    casillas[0][0].getCoordenada();


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
