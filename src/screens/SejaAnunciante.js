import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

import Header from '../components/Header';

export default class SejaAnunciante extends Component {

  static navigationOptions = {
    drawerLabel: 'Seja um anunciante',
    drawerIcon: () => (
        <Image
          source={require('../imgs/icon_anunciante.png')}
          style={[estilos.icon, {tintColor: '#000'}]}
        />
    ),
  };

  render() {
    return (
      <View style={estilos.container}>
        <Header tituloHeader='Anunciante' navigation={this.props.navigation}/>
        <Text style={estilos.texto}>Em breve</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  icon: {
      height: 24,
      width: 24,
  }
});
