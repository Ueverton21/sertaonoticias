import React from "react";
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";

import DrawerOptions from './screens/DrawerOptions';
import DetalhesNoticia from './screens/DetalhesNoticia';
import CriarConta from './screens/CriarConta';

var config = {
    apiKey: "AIzaSyBPyrvNwaJ8-sXVRBHAXGYOJIrQW36HKm8",
    authDomain: "sertaonoticias-6022b.firebaseapp.com",
    databaseURL: "https://sertaonoticias-6022b.firebaseio.com",
    projectId: "sertaonoticias-6022b",
    storageBucket: "sertaonoticias-6022b.appspot.com",
    messagingSenderId: "342634762640"
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator({
    DrawerOptions: {
        screen: DrawerOptions,
        navigationOptions: {
            header: null,
        }
    },
    DetalhesNoticia,
    CriarConta
});

export default createAppContainer(AppNavigator);