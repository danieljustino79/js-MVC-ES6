class Negociacao{
    constructor(d, q, v){
        //--defesa.2
        //this._data = d;
        this._data = new Date(d.getTime());
        this._quantidade = q;
        this._valor = v;

        Object.freeze(this);
    }

    get data(){
        //--defesa.1
        //return this._data;
        return new Date(this._data.getTime());
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