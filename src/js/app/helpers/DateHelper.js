class DateHelper{
    //formato yyyy-dd-mm
    static _validaFormatoDigito(texto){
        //Fast fail
        //(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])) mais coerente
        return ( ! /\d{4}-\d{2}-\d{2}/.test(texto)) ? false : texto;        
    }
    static textoParaData(texto){
        if( ! this._validaFormatoDigito(texto))
            throw new Error('DateHelper - erro de formato de data yyyy-dd-mm.');        
        else
            return new Date(texto.split('-'));
    }

    //Template string js
    static dataParaTexto(data){
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();

        return `${dia}/${(mes)}/${ano}`;
    }
}