class Casilla {
    constructor(valor, x, y){
        this.valor = valor;
        this.x = x;
        this.y = y;
    }



    get CoordX(){
        return this.x;

    }

    get CoordY(){
        return this.y;

    }

    get Valor(){
        return this.valor;
    }

    set Valor(valor){
        this.valor = valor;
    }

    getCoordenada(){
        console.log(`Coordenadas: ${this.x} x ${this.y} x ${this.valor}`);
    }


}
export {Casilla};
