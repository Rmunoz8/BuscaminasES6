!function e(t,n,l){function o(i,r){if(!n[i]){if(!t[i]){var d="function"==typeof require&&require;if(!r&&d)return d(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n||e)},s,s.exports,e,t,n,l)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<l.length;i++)o(l[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.crearClases=function(e){for(var t=1,n=1;n<=e;n++)for(var o=1;o<=e;o++){var a="cas"+t,i=a;(a=new l.Casilla(i,!1,0,!1)).dimeNombre(),t++}},n.prueba=function(){alert("hola")};var l=e("./casilla.js"),o=e("./pantalla.js"),a=e("./tablero.js");window.onload=function(){(0,o.ocultarIniciales)(),document.getElementById("normal").addEventListener("click",a.crearTablero,!1),document.getElementById("dificil").addEventListener("click",a.crearTablero,!1),document.getElementById("botonJugar").addEventListener("click",o.jugar,!1),document.getElementById("botonReiniciar").addEventListener("click",o.reiniciar,!1),document.getElementById("botonReglas").addEventListener("click",o.reglas,!1)}},{"./casilla.js":2,"./pantalla.js":3,"./tablero.js":4}],2:[function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=function(){function e(t,n,o,a){l(this,e),this.nombre=t,this.bomba=n,this.numBombas=o,this.marcada=a}return o(e,[{key:"holaMundo",value:function(){console.log("Hola mundo tengo bomba? "+this.bomba+" mi nombre es "+this.nombre)}},{key:"dimeNombre",value:function(){console.log("Soy la casilla "+this.nombre)}}]),e}();n.Casilla=a},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.ocultarIniciales=function(){document.getElementById("liReiniciar").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="none",document.getElementById("tablero").style.display="none"},n.jugar=function(){document.getElementById("reglas").style.display="none",document.getElementById("liJugar").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("tablero").style.display="none",document.getElementById("liReiniciar").style.display="block",document.getElementById("dificultad").style.display="block"},n.reiniciar=function(){document.getElementById("tablero").style.display="none",document.getElementById("reglas").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("liReiniciar").style.display="none",document.getElementById("liJugar").style.display="block",document.getElementById("titulo").style.display="block"},n.reglas=function(){document.getElementById("tablero").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="block"},n.tablero=function(){document.getElementById("dificultad").style.display="none",document.getElementById("tablero").style.display="block"}},{}],4:[function(e,t,n){"use strict";function l(e){return"normal"==e?8:10}Object.defineProperty(n,"__esModule",{value:!0}),n.crearTablero=function(){(0,o.tablero)();var e=l(this.id);(0,a.crearClases)(e);for(var t=1,n=document.getElementById("tablero"),i=1;i<=e;i++){for(var r=document.createElement("br"),d=1;d<=e;d++){var c=document.createElement("img");c.setAttribute("src","img/Bloque.png"),n.appendChild(c);var s="cas"+t;t++,c.setAttribute("onclick",s+".dimeNombre();")}n.appendChild(r)}};var o=e("./pantalla.js"),a=(e("./casilla.js"),e("./app.js"))},{"./app.js":1,"./casilla.js":2,"./pantalla.js":3}]},{},[1]);
