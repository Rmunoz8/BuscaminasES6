import _ from 'lodash';

import {ocultarIniciales, jugar, reiniciar, reglas} from './pantalla.js';
import {crearTablero} from './tablero.js';

 window.onload = function (){

     ocultarIniciales();

     document.getElementById("normal").addEventListener("click", crearTablero, false);
     document.getElementById("dificil").addEventListener("click", crearTablero, false);
     document.getElementById("botonJugar").addEventListener("click", jugar, false);
     document.getElementById("botonReiniciar").addEventListener("click", reiniciar, false);
     document.getElementById("botonReglas").addEventListener("click", reglas, false);



}
