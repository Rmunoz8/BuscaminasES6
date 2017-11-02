class Casilla {
    constructor(bomba, numBombas, marcada){
        this.bomba = bomba;
        this.numBombas = numBombas;
        this.marcada = marcada;
    }

    holaMundo(){
        console.log(`Hola mundo tengo bomba? ${this.bomba}`);
    }
}
export {Casilla};
