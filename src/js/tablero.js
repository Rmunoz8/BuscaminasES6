export function crearTablero(){

    dificultad(this.id);

}


function dificultad(dif){
       if(dif == 'normal'){
        console.log("Normal");
    }else if(dif == 'dificil'){
        console.log("Dificil");
    }else{
        console.log("ERROR");
    }
}
