class Negociacao{
    constructor(d, q, v){
        this._data = d;
        this._quantidade = q;
        this._valor = v;

        Object.freeze(this);
    }

    obterVolume(){
        return this._quantidade * this._valor;
    }
}