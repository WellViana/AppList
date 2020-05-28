import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'
import TiraFoto from './TiraFoto';

import cores from '../constantes/Cores'
import medidas from '../medidas/medidas';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [imagemURI, setImagemURI] = useState();

    const capturarNome = (nome) => {
        setNome(nome)
    };

    const capturarCelular = (celular) => {
        setCelular(celular)
    };

    const capturarImagem = (imagemURI) => {
        setImagemURI(imagemURI);
    }

    return (
        <View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Nome"
                    style={styles.nomeInputText}
                    onChangeText={capturarNome}
                    value={nome}
                />
            </View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Telefone"
                    style={styles.telefoneInputText}
                    onChangeText={capturarCelular}
                    value={celular}
                />
            </View>
            <View style={styles.contatoView}>
                <TiraFoto onFotoTirada={capturarImagem} />
            </View>
            <View style={styles.contatoView}>
                <Button
                    title={'Adicionar'}
                    onPress={() => {
                        props.onAdicionarContato(nome, celular, imagemURI)
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: medidas.PEQUENO
    },
    nomeInputText: {
        width: medidas.GRANDEPORCENTAGEM,
        borderBottomColor: cores.PRETO,
        borderBottomWidth: medidas.MINIMO,
        padding: medidas.PEQUENO,
        marginBottom: medidas.MEDIO
    },
    telefoneInputText: {
        width: medidas.GRANDEPORCENTAGEM,
        borderBottomColor: cores.PRETO,
        borderBottomWidth: medidas.MINIMO,
        padding: medidas.PEQUENO,
        marginBottom: medidas.MEDIO
    }
});

export default ContatoInput;
