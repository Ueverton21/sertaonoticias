import {
    MODIFICA_NOME,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_SUCESSO,
    CRIA_CONTA,
    CARREGAMENTO_CADASTRO,
    NOVO_CADASTRO,
    CADASTRO_ERRO,
    LOAD_LOGIN,
    LOGIN_SUCESSO,
    LOGIN_ERRO,
    LOGOUT
} from './types';

import firebase from 'firebase';
import b64 from 'base-64';

export const modificaNome = nome => {
    return({
        type: MODIFICA_NOME,
        payload: nome,
    })
}

export const modificaEmail = email => {
    return({
        type: MODIFICA_EMAIL,
        payload: email,
    })
}

export const modificaSenha = senha => {
    return({
        type: MODIFICA_SENHA,
        payload: senha,
    })
}

export const criaConta = (email, senha, nome) => {
    
    return dispatch => {

        dispatch({type: CARREGAMENTO_CADASTRO});

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            let emailB64 = b64.encode(email);
            firebase.database().ref(`/usuarios/${emailB64}`)
                .set({nome})
                .then(value =>  cadastroSucesso(dispatch))
        })
        .catch(error => cadastroErro(error.message, dispatch));

        
    }
}
const cadastroSucesso = (dispatch) => {
    dispatch({type: CADASTRO_SUCESSO});
}

const cadastroErro = (erro, dispatch) => {
    dispatch({type: CADASTRO_ERRO, payload: erro});
}

export const novoCadastro = () => {
    return dispatch => {
        dispatch({type: NOVO_CADASTRO});
    }
}

export const loginUsuario = (email, senha) => {
    return dispatch => {
        dispatch({type: LOAD_LOGIN});

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(user => loginSucesso(user, dispatch))
            .catch(erro => loginErro(erro.message, dispatch))
    }   
}

const loginSucesso = (user, dispatch) => {
    let emailB64 = b64.encode(user.email);
    let nomeUser = '';
    firebase.database().ref(`/usuarios/${emailB64}`)
        .once("value", snapshot=> {
            dispatch({type: LOGIN_SUCESSO, payload: snapshot.val().nome});
        })

}

const loginErro = (erro, dispatch) => {
    dispatch({type: LOGIN_ERRO, payload: erro});
}

export const logout = () => {
    return dispatch => { 
        firebase.auth().signOut();
        dispatch({type: LOGOUT});
    }
}