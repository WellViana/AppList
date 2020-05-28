export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (key, nome, celular, foto) => {
    return {
        type: ADD_CONTATO,
        dadosContato: {
            key: key,
            nome: nome,
            celular: celular,
            foto: foto
        }
    }
}
