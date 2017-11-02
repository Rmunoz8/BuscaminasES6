class Casilla {
    constructor(nombre, bomba, numBombas, marcada){
        this.nombre = nombre
        this.bomba = bomba;
        this.numBombas = numBombas;
        this.marcada = marcada;
    }

    holaMundo(){
        console.log(`Hola mundo tengo bomba? ${this.bomba} mi nombre es ${this.nombre}`);
    }

    dimeNombre(){
        console.log(`Soy la casilla ${this.nombre}`);
    }


}
export {Casilla};
