import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';

import DetalhesNoticias from './DetalhesNoticia';
import Noticia from '../components/Noticia';
import Header from '../components/Header';

import firebase from 'firebase';

import _ from 'lodash';

export default class Noticias extends Component {

  state = {
    dados: [],
    carregamento: true,
  }

  conectaDatabase = () => {
    firebase.database().ref('/noticias')
      .on("value", snap => {
        this.setState({dados: _.values(snap.val()), carregamento: false});
        this.inverterVetor();
      });
  }

  inverterVetor(){
    let vetor = this.state.dados;
    let novo =[];
    var j = 0;
    for(var i=vetor.length-1; i>=0; i--){
      novo[j]=vetor[i];
      j++;
    }
    this.setState({dados: novo});
  }

  componentWillMount(){
    
    this.conectaDatabase();
  }

  static navigationOptions = {
    drawerLabel: 'Notícias',
    drawerIcon: () => (
        <Image
          source={require('../imgs/icon_noticias.png')}
          style={[estilos.icon, {tintColor: '#000'}]}
        />
    ),
  };

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
        <ScrollView style={{paddingTop: 5}}>
          {this.state.dados.map(dado => <Noticia key={dado.imagem} dado={dado} navigation={this.props.navigation}/>)}
        </ScrollView> 
      );
    }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={estilos.container}>
        <Header navigation={this.props.navigation} tituloHeader='Sertão Notícias'/>
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
    backgroundColor: '#F5FCFF',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
      height: 30,
      width: 30,
  },
  main: {
    flex: 1,
    marginTop: 60,
    paddingBottom: 5,
  }
});
