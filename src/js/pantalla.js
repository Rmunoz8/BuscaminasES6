export let ocultarIniciales = () =>{
    //     Ocultando elementos ocultos
    document.getElementById("liReiniciar").style.display = "none";
    document.getElementById("dificultad").style.display = "none" ;
    document.getElementById("reglas").style.display = "none";
}

    export let jugar = () =>{

        document.getElementById("reglas").style.display = "none";
        document.getElementById("liJugar").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("liReiniciar").style.display = "block";
        document.getElementById("dificultad").style.display = "block";

    }

    export let reiniciar = () =>{

         document.getElementById("reglas").style.display = "none";
         document.getElementById("dificultad").style.display = "none" ;
         document.getElementById("liReiniciar").style.display = "none";
         document.getElementById("liJugar").style.display = "block";
         document.getElementById("titulo").style.display = "block";
     }

      export let reglas = () =>{
         document.getElementById("titulo").style.display = "none";
         document.getElementById("dificultad").style.display = "none";
         document.getElementById("reglas").style.display = "block";
     }
