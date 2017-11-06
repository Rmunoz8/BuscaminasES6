//Imports de la aplicación

import {tablero} from './pantalla.js';
import {Casilla} from './casilla.js';
import {crearClases} from './app.js';

export function crearTablero() { // Función que genera el tablero
    tablero();
    let tamanyo = selDificultad(this.id);
    let num = 1;
    for (var i = 1; i <= tamanyo; i++) {
        for (var j = 1; j <= tamanyo; j++) {

        }
    }
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

function prueba() {
    alert("hola");
}
