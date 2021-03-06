import * as FileSystem from 'expo-file-system';

import { inserirContato, buscarContatos } from '../helpers/db';

export const ADD_CONTATO = 'ADD_CONTATO';
export const DEL_CONTATO = 'DEL_CONTATO';
export const ALT_CONTATO = 'ALT_CONTATO';
export const LISTAR_CONTATOS = 'LISTAR_CONTATOS';



export const addContato = (nomeContato , telefoneContato, imagem, latitude, longitude) => {

    return async dispatch => {
        
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })
            let data = new Date().toString();

            const resultadoDB = await inserirContato(
                nomeContato,
                telefoneContato,
                novoPath,
                latitude,
                longitude,
                data
            );

            console.log(resultadoDB);

            dispatch({type: ADD_CONTATO, dadosContato: { id: resultadoDB.insertId, nomeContato: nomeContato, telefoneContato: telefoneContato,
                 imagem: novoPath, lat: latitude , lng: longitude, data: data } })

        } catch(err){
            console.log(err);
            throw err;
        }
    };       
}

export const listarContatos = () => {
    return async dispatch => {
        try{
            const resultadoDB = await buscarContatos();
            dispatch({type: LISTAR_CONTATOS, contatos: resultadoDB.rows._array });
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
};


export const delContato = (idContato) => {

    return {
        type: DEL_CONTATO, dadosContato: {idContato: idContato}
    }
} 

export const altContato = (idContato, nomeContato, telefoneContato, imagemContato) => {

    return {
        type: ALT_CONTATO, dadosContato: {idContato: idContato, nomeContato: nomeContato, telefoneContato: telefoneContato, imagem: imagemContato}
    }
}

