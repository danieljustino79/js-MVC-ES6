class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(){
        return `<b>bloco de html</b> NegocicoesView() para Html div `;
    }

    update(){
        this._elemento.innerHTML = this._template();
    }
}