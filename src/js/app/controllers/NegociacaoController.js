class NegociacaoController{
    
    constructor(){
        this._data = new Date('2020-02-20')
        this._quantidade = 1;
        this._valor = 2.2;
    }

    adiciona(event){
        event.preventDefault(); 
        let negociacao = new Negociacao(
            this._data,
            this._quantidade,
            this._valor);
        console.log('ctrl:'+JSON.stringify(negociacao))
    }
}