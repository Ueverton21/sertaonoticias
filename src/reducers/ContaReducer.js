import {
    MODIFICA_NOME,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_SUCESSO,
    CARREGAMENTO_CADASTRO,
    NOVO_CADASTRO,
    CADASTRO_ERRO,
    LOAD_LOGIN,
    LOGIN_SUCESSO,
    LOGIN_ERRO,
    LOGOUT,
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    carregamentoCadastro: false,
    cadastroErro: '',
    cadastrado: false,
    loadLogin: false,
    logado: false,
    erroLogin: '',
    nomeUser: '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_NOME:
            return{...state, nome: action.payload};

        case MODIFICA_EMAIL:
            return{...state, email: action.payload};

        case MODIFICA_SENHA:
            return{...state, senha: action.payload};

        case CARREGAMENTO_CADASTRO:
            return{...state, carregamentoCadastro: true};

        case CADASTRO_SUCESSO: 
            return{...state, 
                carregamentoCadastro: false, 
                nome: '', senha: '', 
                cadastrado: true, 
                cadastroErro: '',
                erroLogin: '',
            };

        case CADASTRO_ERRO:
            return{...state, cadastroErro: action.payload, carregamentoCadastro: false};

        case NOVO_CADASTRO: 
            return{...state, cadastrado: false, cadastroErro: '', erroLogin: ''};

        case LOAD_LOGIN:
            return{...state, loadLogin: true};
        
        case LOGIN_SUCESSO:
            return{...state, logado: true, nomeUser: action.payload};

        case LOGIN_ERRO: 
            return{...state, erroLogin: action.payload, loadLogin: false}

        case LOGOUT:
            return{...state = INITIAL_STATE};

        default: 
            return state;
    }
}