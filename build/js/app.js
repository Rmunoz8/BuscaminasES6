!function e(t,n,l){function i(o,a){if(!n[o]){if(!t[o]){var r="function"==typeof require&&require;if(!a&&r)return r(o,!0);if(d)return d(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n||e)},u,u.exports,e,t,n,l)}return n[o].exports}for(var d="function"==typeof require&&require,o=0;o<l.length;o++)i(l[o]);return i}({1:[function(e,t,n){"use strict";var l=e("./pantalla.js");window.onload=function(){(0,l.ocultarIniciales)();var e=document.getElementById("botonJugar"),t=document.getElementById("botonReinicar"),n=document.getElementById("botonReglas");e.addEventListener("click",l.jugar,!1),t.addEventListener("click",l.reiniciar,!1),n.addEventListener("click",l.reglas,!1)}},{"./pantalla.js":2}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.ocultarIniciales=function(){document.getElementById("liReiniciar").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="none"},n.jugar=function(){document.getElementById("reglas").style.display="none",document.getElementById("liJugar").style.display="none",document.getElementById("titulo").style.display="none",document.getElementById("liReiniciar").style.display="block",document.getElementById("dificultad").style.display="block"},n.reiniciar=function(){document.getElementById("reglas").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("liReiniciar").style.display="none",document.getElementById("liJugar").style.display="block",document.getElementById("titulo").style.display="block"},n.reglas=function(){document.getElementById("titulo").style.display="none",document.getElementById("dificultad").style.display="none",document.getElementById("reglas").style.display="block"}},{}]},{},[1]);