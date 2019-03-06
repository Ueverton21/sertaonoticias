import React,{Component} from "react";
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';

export default class Principal extends Component{
    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <App />
            </Provider>
        );
    }
}