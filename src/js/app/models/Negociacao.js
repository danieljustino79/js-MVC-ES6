class Negociacao{
    constructor(d, q, v){
        this._data = d;
        this._quantidade = q;
        this._valor = v;

        Object.freeze(this);
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    obterVolume(){
        return this._quantidade * this._valor;
    }
}