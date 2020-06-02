import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db")


export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone NUM NOT NULL, imagemUri TEXT NOT NULL);',
                [],
                () => {resolve()},
                (_, err) => {reject(err)}
            );
        });  
    });
    return promise;
}

export const inserirContato = (nomeContato, telefoneContato, imagemUri) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO tb_contato(nome, telefone, imagemUri) VALUES (?,?,?);",
                [nomeContato, telefoneContato, imagemUri],
                (_, resultado) => {resolve(resultado)},
                (_, err) => { reject(err)}
            );
        });
    });
    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject(err)}
            );
        });
    });
    return promise;
} 