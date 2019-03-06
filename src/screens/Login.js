import React, {Component} from 'react';
import { StyleSheet, Text, ImageBackground,View, Button, Image, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native';

import Header from '../components/Header';

import { connect } from 'react-redux';

import { 
    modificaEmail, 
    modificaSenha,
    novoCadastro,
    loginUsuario,
    logout
    } from '../actions/ContaAction';

class Login extends Component {
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: () => (
            <Image
              source={require('../imgs/icon_login.png')}
              style={[estilos.icon, {tintColor: '#000'}]}
            />
        ),
    };

    renderButtonOrLoad(){
        if(this.props.loadLogin){
            return(
                <View>
                    <ActivityIndicator size='large' color='#000'/>
                </View>
            );
        }
        else{
            return(
                <View>
                    <TouchableOpacity onPress={()=>this.props.loginUsuario(this.props.email, this.props.senha)} activeOpacity={.7} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    renderTela(){
        
        if(this.props.logado){
            return(
                <View style={{alignItems: 'center', marginTop: 80}}>
                    <Image source={require('../imgs/logado.png')} style={{height: 100, width: 100}}/>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#11E', fontSize: 25, fontWeight: 'bold'}}>{this.props.nomeUser}</Text>
                        <Image source={require('../imgs/icon_ok.png')} style={{height: 30, width: 30}}/>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#008B8B', 
                        paddingVertical: 10,
                        paddingHorizontal: 20,  
                        borderRadius: 5,
                        marginTop: 15,}}

                        activeOpacity={.7}
                        onPress={() => this.props.logout()}
                        >
                        <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>Sair</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else{
            return(
                <View style={estilos.container}>
                    <View>
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
                        <TouchableOpacity 
                            activeOpacity={.5} 
                            style={{alignItems: 'center'}}
                            onPress={() => {
                                this.props.navigation.navigate('CriarConta');
                                this.props.novoCadastro();
                            }}
                            >
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#22F', marginBottom: 10,}}>Não tem cadastro, clique aqui!</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 16, color: '#F22', marginBottom: 10, fontWeight: 'bold'}}>{this.props.erroLogin}</Text>
                        {this.renderButtonOrLoad()}
                    </View>
                </View>
            )
        }

    }

    render() {
        return (
            <ImageBackground style={{flex: 1, width: '100%'}} source={require('../imgs/background_criar_conta.png')}>
                <Header navigation={this.props.navigation} tituloHeader='Fazer login'/>
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
    icon: {
        width: 24,
        height: 24,
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
        email: state.ContaReducer.email,
        senha: state.ContaReducer.senha,
        loadLogin: state.ContaReducer.loadLogin,
        erroLogin: state.ContaReducer.erroLogin,
        logado: state.ContaReducer.logado,
        nomeUser: state.ContaReducer.nomeUser
    });
}

export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    novoCadastro,
    loginUsuario,
    logout
})(Login);