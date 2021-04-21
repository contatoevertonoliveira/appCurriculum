import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import foto from './assets/perfil.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  return (
    <>

      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.fotoDev} />
          <Text style={style.nomeDev}>EVERTON FELIX DE OLIVEIRA</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View>
            <Icon name="rocket" size={30} />
            <Icon name="facebook" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
      </View>

    </>
  );
};

const style = StyleSheet.create({
  
  page:{
    backgroundColor:'#E7E7E7',
    flex: 1,
  },
  container_cabecalho:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoDev:{
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  /*nomeDev:{
    fontStyle:32,
    fontWeight:'bold',
    marginTop: 10
  },*/
  funcao:{
    color: '#939393',
    marginBottom:10
  }
});

export default App;
