import _ from 'lodash';

import {ocultarIniciales, jugar, reiniciar, reglas} from './pantalla.js';

 window.onload = function (){

     ocultarIniciales();

    var botonJugar = document.getElementById("botonJugar");
    var botonReinicar = document.getElementById("botonReinicar");
    var botonReglas = document.getElementById("botonReglas");

    botonJugar.addEventListener("click", jugar, false);
    botonReinicar.addEventListener("click", reiniciar, false);
    botonReglas.addEventListener("click", reglas, false);

}
