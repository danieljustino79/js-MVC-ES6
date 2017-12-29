class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //--defesa.3
        //return this._negociacoes;
        return [].concat(this._negociacoes);
    }
}