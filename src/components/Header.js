import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component{

    render(){
        return(
        <View style={estilos.menuFixed}>
            <TouchableOpacity style={estilos.botaoMenuFixed} onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../imgs/menu.png')} style={{height: 24, width: 24}}/>
            </TouchableOpacity>
            <View style={{marginLeft: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={estilos.barraTitle}>{this.props.tituloHeader}</Text>
            </View>
        </View>
        );
    }
}

const estilos = StyleSheet.create({
    menuFixed: {
        backgroundColor: '#008B8B',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#AAA',
    },
    botaoMenuFixed: {
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    barraTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
});