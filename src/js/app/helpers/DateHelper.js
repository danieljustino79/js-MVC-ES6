class DateHelper{
    //formato yyyy-mm-dd
    static _validaFormatoDigito(texto){
        //Fast fail
        //(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])) mais coerente
        return ( ! /\d{4}-\d{2}-\d{2}/.test(texto)) ? false : texto;        
    }
    static textoParaData(texto){
        if( ! this._validaFormatoDigito(texto))
            throw new Error('DateHelper - erro de formato de data yyyy-mm-dd.');        
        else
            return new Date(texto.split('-'));
    }

    //Template string js
    static dataParaTexto(data){
        let dia = data.getDate();
        dia = (dia<10) ? '0'+dia : dia;
        let mes = data.getMonth() + 1;
        mes = (mes<10) ? '0'+mes : mes;
        let ano = data.getFullYear();

        return `${dia}/${(mes)}/${ano}`;
    }
}