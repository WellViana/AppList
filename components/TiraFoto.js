import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import Cores from '../constantes/Cores'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const TiraFoto = props => {
    const [imagemURI, setImagemURI] = useState();

    async function tirarFoto() {
        const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            throw new Error('Por favor, autorize o uso da câmera nas configurações do celular');
        }

        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });

        setImagemURI(foto.uri);

        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
                {
                    !imagemURI ? (
                        <Text>Nenhuma foto.</Text>
                    ) : (
                        <Image
                            style={estilos.imagem}
                            source={{ uri: imagemURI }}
                        />
                    )
                }
            </View>
            <Button
                title="Tirar foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    )
};

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
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

export default TiraFoto;
