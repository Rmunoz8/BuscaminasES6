//Imports de la aplicación

import _ from 'lodash';

import {Casilla} from './casilla.js';
import {ocultarIniciales, jugar, reiniciar, reglas} from './pantalla.js';
import {crearTablero, casillas} from './tablero.js';


 window.onload = function (){


     ocultarIniciales(); //Ocultando elementos iniciales


//    Control de eventos
     document.getElementById("normal").addEventListener("click", crearTablero, false);
     document.getElementById("dificil").addEventListener("click", crearTablero, false);
     document.getElementById("botonJugar").addEventListener("click", jugar, false);
     document.getElementById("botonReiniciar").addEventListener("click", reiniciar, false);
     document.getElementById("botonReglas").addEventListener("click", reglas, false);


}


