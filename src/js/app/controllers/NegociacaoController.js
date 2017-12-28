class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);

        this._data = $('#data');        
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

        //this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        try{
            event.preventDefault();  

            let negociacao = this._criaNegociacao();
            //this._listaNegociacoes.adiciona(negociacao);

            this._limpaFormulario();

console.log(negociacao)
            //console.log(this._listaNegociacoes.negociacoes)

            
        }
        catch(ex){
            console.log(ex.message)
        }       
    }

    /*---Private---*/
    _criaNegociacao(){
        let dataFormatada = DateHelper.textoParaData(this._data.value);  

        let obj = new Negociacao(
            dataFormatada,
            this._quantidade.value,
            this._valor.value);
        return obj;
    }
    _limpaFormulario(){
        this._data.value = '';
        this._data.focus();
        this._quantidade.value = 1;
        this._valor.value = 0.0;
    }
}