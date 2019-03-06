import React,{Component} from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
import { View, SafeAreaView, Image, ScrollView } from 'react-native';

import Noticias from '../screens/Noticias';
import Eventos from '../screens/Eventos';
import SejaAnunciante from '../screens/SejaAnunciante';
import CriarConta from '../screens/CriarConta';
import Login from '../screens/Login';

const customDrawerComponent = (props) => (
    <SafeAreaView>
        <View style={{
            backgroundColor: '#FFF',
            height: 120, 
            alignItems: 'center', 
            justifyContent: 'center', }}>

            <View style={{backgroundColor: '#008B8B' , padding: 20, borderRadius: 60}}>
                <Image source={require('../imgs/logo.png')} 
                    style={{
                        height: 60, 
                        width: 60,                          
                    }}
                    />
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const AppNavigator = createDrawerNavigator({
    Login,
    Noticias,
    Eventos,
    SejaAnunciante,
    },{
        contentComponent: customDrawerComponent,
        drawerBackgroundColor: '#FFF',
        contentOptions: {
            activeTintColor: '#000',
            activeBackgroundColor: '#008B8B',
            iconContainerStyle: {
                opacity: 1
            }
        },
    }
);

export default createAppContainer(AppNavigator);