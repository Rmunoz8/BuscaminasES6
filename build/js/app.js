!function e(t,n,l){function o(d,a){if(!n[d]){if(!t[d]){var r="function"==typeof require&&require;if(!a&&r)return r(d,!0);if(i)return i(d,!0);var c=new Error("Cannot find module '"+d+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[d]={exports:{}};t[d][0].call(s.exports,function(e){var n=t[d][1][e];return o(n||e)},s,s.exports,e,t,n,l)}return n[d].exports}for(var i="function"==typeof require&&require,d=0;d<l.length;d++)o(l[d]);return o}({1:[function(e,t,n){"use strict";var l=e("./pantalla.js"),o=e("./tablero.js");window.onload=function(){(0,l.ocultarIniciales)(),document.getElementById("normal").addEventListener("click",o.crearTablero,!1),document.getElementById("dificil").addEventListener("click",o.crearTablero,!1),document.getElementById("botonJugar").addEventListener("click",l.jugar,!1),document.getElementById("botonReiniciar").addEventListener("click",l.reiniciar,!1),document.getElementById("botonReglas").addEventListener("click",l.reglas,!1)}},{"./pantalla.js":2,"./tablero.js":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.ocultarIniciales=function(){document.getElementById("liReiniciar").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="none",document.getElementById("tablero").style.display="none"},n.jugar=function(){document.getElementById("reglas").style.display="none",document.getElementById("liJugar").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("liReiniciar").style.display="block",document.getElementById("dificultad").style.display="block"},n.reiniciar=function(){document.getElementById("reglas").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("liReiniciar").style.display="none",document.getElementById("liJugar").style.display="block",document.getElementById("titulo").style.display="block"},n.reglas=function(){document.getElementById("titulo").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="block"},n.tablero=function(){document.getElementById("dificultad").style.display="none",document.getElementById("tablero").style.display="block"}},{}],3:[function(e,t,n){"use strict";function l(e){return"normal"==e?8:10}Object.defineProperty(n,"__esModule",{value:!0}),n.crearTablero=function(){(0,o.tablero)();var e=l(this.id);console.log(e);for(var t=1;t<=e;t++)for(var n=1;n<=e;n++)console.log(t+"x"+n)};var o=e("./pantalla.js")},{"./pantalla.js":2}]},{},[1]);
