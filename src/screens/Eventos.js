import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';

import AutoImage from 'react-native-auto-height-image';
import firebase from 'firebase';
import Header from '../components/Header';
import Evento from '../components/Evento';
import _ from 'lodash';

export default class Eventos extends Component {
  
  state ={
    dados: {},
    carregamento: true,
  }

  static navigationOptions = {
    drawerLabel: 'Eventos',
    drawerIcon: () => (
        <Image
          source={require('../imgs/icon_eventos.png')}
          style={[estilos.icon, {tintColor: '#000'}]}
        />
    ),
  };

  conectaDatabase = () => {
    firebase.database().ref('/eventos')
      .on("value", snap => {
        this.setState({dados: _.values(snap.val()), carregamento: false});
      });
  }

  componentWillMount(){
    this.conectaDatabase();
  }

  renderTela(){

    if(this.state.carregamento){
      return(
        <View style={{marginTop: 10, flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color='#008B8B'/>
        </View>
      );
    }
    else{
      return(
        <ScrollView style={{width: '100%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 10}}>
            {this.state.dados.map(dado => <Evento key={dado.imagem} dado={dado}/>)}
          </View>
        </ScrollView>
      );
    }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={estilos.container}>
        <Header tituloHeader='Eventos' navigation={this.props.navigation}/>
        <View style={estilos.main}>
          {this.renderTela()}
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  icon: {
    height: 24,
    width: 24,
  },
  main: {
    flex: 1,
    marginTop: 60,
    paddingBottom: 5,
  }
});
