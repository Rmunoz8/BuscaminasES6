//Imports de la aplicación

import {tablero} from './pantalla.js';
import {Casilla} from './casilla.js';
import {crearClases} from './app.js';

export function crearTablero(){ // Función que genera el tablero
    tablero();
    let tamanyo = selDificultad(this.id);
//    console.log(tamanyo);
    crearClases(tamanyo);
    let num = 1;
    var padre = document.getElementById("tablero");
    for(var i = 1; i <= tamanyo; i++){
            var salto = document.createElement("br");
        for(var j = 1; j <= tamanyo; j++){
            var imgT = document.createElement("img");
            imgT.setAttribute("src", 'img/Bloque.png');
            padre.appendChild(imgT);
            let nombre = "cas"+num;
//            let nombre = nombreClas;
//            imgT.setAttribute("id", nombre);
            num++;
//            nombreClas.dimeNombre();
            imgT.setAttribute("onclick",nombre+".dimeNombre();");
//            nombreClas = new Casilla(nombre, false, 0, false);
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






