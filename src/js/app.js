//Imports de la aplicación

import _ from 'lodash';

import {Casilla} from './casilla.js';
import {ocultarIniciales, jugar, reiniciar, reglas} from './pantalla.js';
import {crearTablero} from './tablero.js';


 window.onload = function (){


     ocultarIniciales(); //Ocultando elementos iniciales


//    Control de eventos
     document.getElementById("normal").addEventListener("click", crearTablero, false);
     document.getElementById("dificil").addEventListener("click", crearTablero, false);
     document.getElementById("botonJugar").addEventListener("click", jugar, false);
     document.getElementById("botonReiniciar").addEventListener("click", reiniciar, false);
     document.getElementById("botonReglas").addEventListener("click", reglas, false);
//     document.getElementById("cas1").addEventListener("click", cas1.dimeNombre(), false);
//     document.getElementById("hola").addEventListener("click", prueba, false);

}


//export function crearClases(tamanyo){
//     let num = 1;
//     for(var i = 1; i <= tamanyo; i++){
//         for(var j = 1; j <= tamanyo; j++){
//             let nombreCas = "cas"+num;
//             let nombre = nombreCas;
////             nombreCas.dimeNombre();
//             num++;
//         }
//     }
// }

