import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

export default class DetalhesNoticia extends Component {

  static navigationOptions = {
    title: 'Notícia',
    headerStyle: {
      backgroundColor: '#008B8B',
      textColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#aaa',
    },
    headerTintColor: '#fff',
  };

  render() {
    const { navigation } = this.props;
    const noticia = navigation.getParam('noticia');
    return (
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.anuncio}>
            <Image source={require('../imgs/anuncio.png')} style={{width: '100%', height: 140}}/>
          </View>
          <View style={estilos.boxNoticia}>
            <View style={estilos.quadroNoticia}>
              <Text style={estilos.titulo}>{noticia.titulo}</Text>

              <View style={estilos.boxImagem}>
                <Image source={{uri: noticia.imagem}} style={estilos.imagem}/>
              </View>
              <View style={estilos.quadroData}>
                <Image source={require('../imgs/icon_calendario.png')} style={{width: 20, height: 20}} />
                <Text style={estilos.data}>{noticia.data}</Text>
              </View>
              <Text style={estilos.textoNoticia}>{noticia.textonoticia}</Text>

            </View>
          </View>
          <Text style={{fontSize: 20, marginTop: 5, marginLeft: 5}}>Comentários</Text>
        </View>
      </ScrollView>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  anuncio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxNoticia: {
    backgroundColor: '#FFF',
  },
  quadroNoticia: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  boxImagem: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#CCC',
  },
  imagem: {
    width: 290,
    height: 200,
  },
  textoNoticia: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  quadroData: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  data: {
    fontSize: 13,
    color: '#114411',
    marginLeft: 2,
  },
});
