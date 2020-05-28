import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    var dadosContato = action.dadosContato;

    switch (action.type) {
        case 'ADD_CONTATO':
            const c = new Contato(dadosContato.key, dadosContato.nome, dadosContato.celular, dadosContato.foto);

            return {
                contatos: estado.contatos.concat(c)
            };
        default:
            return estado;
    }
}
