!function e(t,n,l){function o(i,r){if(!n[i]){if(!t[i]){var d="function"==typeof require&&require;if(!r&&d)return d(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n||e)},s,s.exports,e,t,n,l)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<l.length;i++)o(l[i]);return o}({1:[function(e,t,n){"use strict";e("./casilla.js");var l=e("./pantalla.js"),o=e("./tablero.js");window.onload=function(){(0,l.ocultarIniciales)(),document.getElementById("normal").addEventListener("click",o.crearTablero,!1),document.getElementById("dificil").addEventListener("click",o.crearTablero,!1),document.getElementById("botonJugar").addEventListener("click",l.jugar,!1),document.getElementById("botonReiniciar").addEventListener("click",l.reiniciar,!1),document.getElementById("botonReglas").addEventListener("click",l.reglas,!1)}},{"./casilla.js":2,"./pantalla.js":3,"./tablero.js":4}],2:[function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=function(){function e(t,n,o){l(this,e),this.valor=t,this.x=n,this.y=o}return o(e,[{key:"getCoordenada",value:function(){console.log("Coordenadas: "+this.x+" x "+this.y+" x "+this.valor)}},{key:"CoordX",get:function(){return this.x}},{key:"CoordY",get:function(){return this.y}},{key:"Valor",get:function(){return this.valor},set:function(e){this.valor=e}}]),e}();n.Casilla=a},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.ocultarIniciales=function(){document.getElementById("liReiniciar").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="none",document.getElementById("tablero").style.display="none"},n.jugar=function(){document.getElementById("reglas").style.display="none",document.getElementById("liJugar").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("tablero").style.display="none",document.getElementById("liReiniciar").style.display="block",document.getElementById("dificultad").style.display="block"},n.reiniciar=function(){document.getElementById("tablero").style.display="none",document.getElementById("reglas").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("liReiniciar").style.display="none",document.getElementById("liJugar").style.display="block",document.getElementById("titulo").style.display="block"},n.reglas=function(){document.getElementById("tablero").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="block"},n.tablero=function(){document.getElementById("dificultad").style.display="none",document.getElementById("tablero").style.display="block"}},{}],4:[function(e,t,n){"use strict";function l(e,t){for(var n=0;n<e;n++)for(var l=0;l<e;l++)document.getElementById(n+"_"+l).addEventListener("click",o,!1)}function o(){d[0][0].getCoordenada()}function a(e){return"normal"==e?8:10}Object.defineProperty(n,"__esModule",{value:!0}),n.casillas=void 0,n.crearTablero=function(){(0,i.tablero)();var e=a(this.id),t=document.getElementById("tablero"),n=document.createElement("table");t.appendChild(n);for(var o=0;o<e;o++){d[o]=[];var c=document.createElement("tr");n.appendChild(c);for(var s=0;s<e;s++){var u=document.createElement("td");u.setAttribute("id",o+"_"+s),c.appendChild(u),document.createElement("img"),u.innerHTML=o+","+s;var y="casilla"+o+"_"+s;y=new r.Casilla("img/Bloque.png",o,s),d[o][s]=y}}d[0][1].getCoordenada(),l(e)};var i=e("./pantalla.js"),r=e("./casilla.js"),d=(e("./app.js"),n.casillas=[])},{"./app.js":1,"./casilla.js":2,"./pantalla.js":3}]},{},[1]);
