import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, FlatList, TextInput, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Cartao from '../components/Cartao';
import ContatoInput from '../components/ContatoInput'
import * as contatosActions from '../store/contatos-actions';
import { ScrollView } from 'react-native-gesture-handler';


const Contatos = (props) => {

    const dispatch = useDispatch()

    const contatos = useSelector(estado => estado.contatos.contatos )

    const [key, setKey] = useState(props.navigation.getParam('key'))
    const[contato, setContato] = useState(contatos.filter(contato => contato.id === key));
    const[altera, setAltera] = useState(false)
    

    const alterarOContato = (nome, telefone, imagemURI) => {

        setContato([{id: key, nome:nome, telefone:telefone, imagemURI:imagemURI}]);

        dispatch(contatosActions.altContato(key, nome, telefone, imagemURI))

        props.navigation.goBack();

    }


    let alteraContato = <View/>;
    
    if(altera){

        alteraContato =
             <View style={estilos.cadastroContato}>
                <ContatoInput onAdicionarContato={alterarOContato} />
            </View>
    }

    return(
        <View style={estilos.container}>
            <ScrollView>
                <FlatList
                    data = {contato}
                    renderItem = {cont => ( 
                        <View>
                            <Image  style={estilos.imagem} source={{uri:cont.item.imagemURI}}/>
                            <Cartao estilos={estilos.itemNaLista}>
                                <Text style={estilos.texto}>Nome: {cont.item.nome} </Text>
                                <Text style={estilos.texto}> Telefone: {cont.item.telefone} </Text>
                            </Cartao>
                        </View>
                    )}/>
            <View style={estilos.botoes}>
                <View style={estilos.botao}> 
                    <Button 
                        title = 'Alterar'
                        onPress = {() =>{setAltera(true)}}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button 
                        title='Voltar'
                        onPress ={() => {props.navigation.navigate('Inicio')}}
                    />
                </View> 
            </View>
            <View style={estilos.alterarContato}>
                    {alteraContato}
                        
            </View>
            </ScrollView>
         </View>
    );
};




const estilos = StyleSheet.create({
    imagem: {
        width: 300,
        height: 150,
        borderRadius:15,
        alignSelf: 'center'
    },
    container: {
        padding: 8,
    },
    alterarContato:{
        padding: 10,
        marginTop: 10
    },

    botoes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    botao: {
        width: 100
    },
    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: '#4F4F4F',
        marginBottom: 4,
        marginTop:4,
        alignItems: 'center'
    },
    texto: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white'
        
    },
    cadastroContato: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    cadastroInputText: {
        fontSize:20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        padding: 1
    
      }
})

export default Contatos;
