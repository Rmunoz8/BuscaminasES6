export let ocultarIniciales = () =>{
    /* Oculta todos los elementos que no tienen que ser visibles al
    inciar el programa*/
    document.getElementById("liReiniciar").style.display = "none";
    document.getElementById("dificultad").style.display = "none" ;
    document.getElementById("reglas").style.display = "none";
    document.getElementById("tablero").style.display = "none";
}

    export let jugar = () =>{
        /* Oculta los elementos no necesarios y
        muestra los que pertenecen al juego*/

        document.getElementById("reglas").style.display = "none";
        document.getElementById("liJugar").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("liReiniciar").style.display = "block";
        document.getElementById("dificultad").style.display = "block";

    }

    export let reiniciar = () =>{
        /* Oculta los elementos no necesarios y
        muestra el boton de reiniciar*/
         document.getElementById("reglas").style.display = "none";
         document.getElementById("dificultad").style.display = "none" ;
         document.getElementById("liReiniciar").style.display = "none";
         document.getElementById("liJugar").style.display = "block";
         document.getElementById("titulo").style.display = "block";
     }

      export let reglas = () =>{
        /* Oculta los elementos no necesarios y
        muestra los que pertenecen a las reglas*/
         document.getElementById("titulo").style.display = "none";
         document.getElementById("dificultad").style.display = "none";
         document.getElementById("reglas").style.display = "block";
     }

      export let tablero = () =>{
        /* Oculta los elementos no necesarios y
        muestra los que pertenecen al tablero de juego*/
          document.getElementById("dificultad").style.display = "none";
          document.getElementById("tablero").style.display = "block";
      }
