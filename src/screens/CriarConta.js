import React, {Component} from 'react';
import { StyleSheet, Text, ImageBackground,View, Button, Image, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native';

import Header from '../components/Header';
import firebase from 'firebase';

import { connect } from 'react-redux';

import { 
    modificaNome, 
    modificaEmail, 
    modificaSenha,
    criaConta } from '../actions/ContaAction';

class CriarConta extends Component {
    static navigationOptions = {
        title: 'Criar Conta',
        headerStyle: {
            backgroundColor: '#008B8B',
            textColor: '#FFF',
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
        },
            headerTintColor: '#fff',
    };

    renderButtonOrLoad(){
        if(this.props.carregamento){
            return(
                <View>
                    <ActivityIndicator size='large' color='#000'/>
                </View>
            );
        }
        else{
            return(
                <View>
                    <TouchableOpacity onPress={()=>this.props.criaConta(this.props.email, this.props.senha, this.props.nome)} activeOpacity={.7} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    renderTela(){
        if(this.props.cadastrado){
            return(
                <Text style={{fontSize: 20, color: '#008822', marginLeft: 10, marginTop: 10, fontWeight: 'bold'}}>Cadastrado com sucesso</Text>
            );
        }
        else{
            return(
                <View style={estilos.container}>
                    <View>
                        <TextInput 
                            placeholderTextColor='#888' 
                            placeholder="Nome" 
                            style={estilos.campoTexto}
                            value={this.props.nome}
                            onChangeText={nome => this.props.modificaNome(nome)}
                            />

                        <TextInput 
                            placeholderTextColor='#888' 
                            placeholder="Email" 
                            style={estilos.campoTexto}
                            value={this.props.email}
                            onChangeText={email => this.props.modificaEmail(email)}
                            />

                        <TextInput 
                            secureTextEntry 
                            placeholderTextColor='#888' 
                            placeholder="Senha" 
                            style={estilos.campoTexto}
                            value={this.props.senha}
                            onChangeText={senha => this.props.modificaSenha(senha)}
                            />
                        <Text style={{fontSize: 16, color: '#F22', marginBottom: 10}}>{this.props.cadastroErro}</Text>
                        <View>{this.renderButtonOrLoad()}</View>
                        
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <ImageBackground style={{flex: 1, width: '100%'}} source={require('../imgs/background_criar_conta.png')}>
                {this.renderTela()}
            </ImageBackground>
        );
    }
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    campoTexto: {
        width: '100%',
        fontSize: 16,
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: 3,
        padding: 8,
        marginBottom: 10,
        color: '#000',
    },
    botao: {
        height: 40,
        backgroundColor: '#008B8B',
        borderRadius: 3,
        justifyContent: 'center',
    },
    textoBotao: {
        alignSelf: 'center', 
        fontSize: 18, 
        color: '#FFF',
        fontWeight: 'bold'
    }
});

const mapStateToProps = state => {
    return({
        nome: state.ContaReducer.nome,
        email: state.ContaReducer.email,
        senha: state.ContaReducer.senha,
        carregamento: state.ContaReducer.carregamentoCadastro,
        cadastrado: state.ContaReducer.cadastrado,
        cadastroErro: state.ContaReducer.cadastroErro,
    });
}

export default connect(mapStateToProps, {
    modificaNome,
    modificaEmail,
    modificaSenha,
    criaConta,
})(CriarConta);