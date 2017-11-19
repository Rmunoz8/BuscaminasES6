import {expandirAgua} from './tablero.js';
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
<<<<<<< HEAD
    }

    set Valor(valor){
        this.valor = valor;
    }

    getCoordenada(){
        console.log(`Coordenadas: ${CoordX} x ${CoordY} ${Valor}`);
    }

    setImagen(valor){
        this.valor = valor;
    }

    getImagen(valor){
        let img = "";

        switch(valor){
            case 0:
                img = "img/i0.png";

            case 1:
                img = "img/i1";

            case 2:
                img = "img/i2";

            case 3:
                img = "img/i3";

            case 4:
                img = "img/i4";

            case 5:
                img = "img/i5";

            case 6:
                img = "img/i6";

            case 7:
                img = "img/i7";

            case 8:
                img = "img/i8";

            case 9:
                img = "img/i9";

            case 10:
                img = "img/i10";

            case 11:
                img = "img/i11";
        }

        return img;
    }

    clickCasilla(x, y){
        console.log(this.x + " x " + this.y + " Valor: " + this.valor);
        if(this.valor == 11){
            console.log("Bomba");
        }else if(this.valor == 0){

           this.valor = 10; document.getElementById("img"+x+"_"+y).setAttribute("src", "img/i10.png");
            expandirAgua(x, y);
        }

=======
    }

    set Valor(valor){
        this.valor = valor;
    }

    getCoordenada(){
        console.log(`Coordenadas: ${this.x} x ${this.y} x ${this.valor}`);
>>>>>>> Buscaminas/master
    }


}
export {Casilla};
