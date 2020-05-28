import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    Alert,
    Platform,
    ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import BotaoCabecalho from '../components/BotaoCabecalho'

import medidas from '../medidas/medidas';

import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
    telaPrincipalView: {
        padding: medidas.GRANDE
    },
    cartao: {
        margin: medidas.GRANDE
    },
    imageBlock: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});

const DetalhesDoContato = (props) => {
    const [isEditando, setIsEditando] = useState(false);
    var contato = props.navigation.state.params.contato;

    return (
        <View>
            <View style={styles.telaPrincipalView}>
                {contato.foto ? (
                    <View style={styles.imageBlock}>
                        <Image
                            style={styles.imagem}
                            source={{ uri: contato.foto }}
                        />
                    </View>
                ) : (
                    <>
                    </>
                )}
                <Text>Nome: {contato.nome}</Text>
                <Text>Celular: {contato.celular}</Text>
            </View>
        </View>
    );
}

DetalhesDoContato.navigationOptions = dadosNav => {
    var contato = dadosNav.navigation.getParam('contato');

    return {
        headerTitle: contato.key + ' - ' + contato.nome,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Editar"
                    iconName={Platform.OS === 'android' ? 'md-edit' : 'ios-edit'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato") }}
                />
            </HeaderButtons>
        )
    }
}

export default DetalhesDoContato;
