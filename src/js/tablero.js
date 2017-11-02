//Imports de la aplicación

import {tablero} from './pantalla.js';
import {Casilla} from './casilla.js';

export function crearTablero(){ // Función que genera el tablero
    tablero();
    let tamanyo = selDificultad(this.id);
    console.log(tamanyo);
    var padre = document.getElementById("tablero");
    for(var i = 1; i <= tamanyo; i++){
            var salto = document.createElement("br");
        for(var j = 1; j <= tamanyo; j++){
            var imgT = document.createElement("img");
            imgT.setAttribute("src", 'img/Bloque.png');
            padre.appendChild(imgT);
            let nombreClas = "cas"+i;
            var nombreClas = new Casilla(true, 1, false);
            cas.holaMundo();
        }
        padre.appendChild(salto);
    }
}


function selDificultad(dif){  // Función para obtener el tamaño de la tabla a partir de la dificultad
    var tamanyo;
    if(dif == 'normal'){
        tamanyo = 8;
    }else{
        tamanyo = 10;
    }
    return tamanyo;
}






