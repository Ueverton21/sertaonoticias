import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Noticia extends Component {
    render(){
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('DetalhesNoticia', {noticia: this.props.dado})}>
                <View style={estilos.quadro}>
                    <View style={estilos.quadroTextos}>
                        <Text style={estilos.titulo}>{this.props.dado.titulo}</Text>
                        <Text style={estilos.descricao}>{this.props.dado.descricao}</Text>
                        <View style={estilos.detalhes}>
                            <View style={estilos.quadroData}>
                                <Image source={require('../imgs/icon_calendario.png')} style={{width: 20, height: 20}} />
                                <Text style={estilos.data}>{this.props.dado.data}</Text>
                            </View>
                            <View style={estilos.quadroComentarios}>
                                <Image source={require('../imgs/icon_comentario.png')} style={{width: 20, height: 20}} />
                                <Text style={estilos.comentarios}>0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={estilos.quadroImagem}>
                        <Image resizeMode={'cover'} source={{uri: this.props.dado.imagem} } style={estilos.imagem}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const estilos = StyleSheet.create({
    quadro: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#EEE',
        borderBottomWidth: 2,
        borderBottomColor: '#CCC',
    },
    quadroTextos: {
        flex: 6,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
        marginRight: 5,
    },
    detalhes: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    quadroData: {
        flex: 1,
        flexDirection: 'row',
    },
    data: {
        fontSize: 13,
        color: '#114411',
        marginLeft: 2,
    },
    quadroComentarios: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    comentarios: {
        fontSize: 13,
        marginLeft: 2,
        color: '#DD4433',
    },
    descricao: {
        fontSize: 16,
        color: '#111',
        marginBottom: 5,
        marginRight: 5,
    },
    quadroImagem: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: '100%',
        height: 100,
    },
});