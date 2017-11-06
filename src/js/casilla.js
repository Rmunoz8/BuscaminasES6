class Casilla {
    constructor(valor, x, y){
        this.valor = valor;
        this.x = x;
        this.y = y;
    }

    getCoordenada(){
        alert.log(`Coordenadas: ${this.x} x ${this.y}`);
    }


}
export {Casilla};
