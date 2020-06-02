import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';

import { useDispatch } from 'react-redux';

import ContatoInput from '../components/ContatoInput';
import Medidas from '../medidas/Medidas';

import * as contatosActions from '../store/contatos-actions';


const NovoContatoTela = (props) => {

  const dispatch = useDispatch ();
  
  const adicionaContato = (contato, telefone, imagemURI) => {
    dispatch(contatosActions.addContato(contato, telefone, imagemURI))
    props.navigation.goBack();
  }

  return (
      <View style={styles.container}>
        <ContatoInput onAdicionarContato={adicionaContato} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:Medidas.fifty,
      },
      
      titulo: {
        fontSize: Medidas.thirty,
        marginBottom:Medidas.twenty
      }
});

export default NovoContatoTela;