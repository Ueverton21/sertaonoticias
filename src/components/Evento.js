import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import AutoImage from 'react-native-auto-height-image';

export default class Evento extends Component{
    render(){
        return(
            <View style={estilos.quadroEvento}>
                <AutoImage source={{uri: this.props.dado.imagem}} width={300}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={estilos.quadroCidade}>
                        <Image source={require('../imgs/icon_localizacao.png')} style={estilos.icone}/>
                        <Text style={estilos.textoCidade}>{this.props.dado.cidade}</Text>
                    </View>
                    <View style={estilos.quadroData}>
                        <Image source={require('../imgs/icon_calendario.png')} style={estilos.icone}/>
                        <Text style={estilos.textoData}>{this.props.dado.data}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    quadroEvento: {
        width: 310,
        alignItems: 'center',
        backgroundColor: '#CCD',
        padding: 5,
        marginVertical: 10,
        borderRadius: 2
    },

    quadroCidade: {
        flexDirection: 'row',
        paddingVertical: 10,
        flex: 3,
    },

    quadroData: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        flex: 2,
        marginRight: 5,
    },

    icone: {
        width: 25,
        height: 25,
    },

    textoCidade: {
        fontSize: 16,
        color: '#111',
        fontWeight: 'bold',
        lineHeight: 24,
    },

    textoData: {
        fontSize: 14,
        color: '#114411',
        fontWeight: 'bold',
        lineHeight: 24,
        marginLeft: 2,
    }

});
