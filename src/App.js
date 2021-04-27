import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import foto from './assets/perfil.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

import Card from './components/Card'

const App = () => {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/everton-f-de-oliveira-a8017282/')
        break
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/contatoevertonoliveira')
        break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/oliveroculto/')
        break
    }
  }

  return (
    <>
      <ScrollView style={style.scrollView}>
        <View style={style.page}>

          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.fotoDev} />
            <Text style={style.nomeDev}>EVERTON FELIX DE OLIVEIRA</Text>
            <Text style={style.funcao}>Desenvolvedor Mobile</Text>
            <View style={style.sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name='github' size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <Icon name='facebook' size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name='linkedin' size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <Card titulo="Formação Academica">
            <Text style={style.card_content_text}>Desenvolvedor ReactJs</Text>
            <Text style={style.card_content_text}>DesenvolvedorReact-Native</Text>
            <Text style={style.card_content_text}>Desenvolvedor C# (Sharp)</Text>
          </Card>
          <Card titulo="Experiência Profissional">
            <Text style={style.card_content_text}>Desenvolvedor ReactJs</Text>
            <Text style={style.card_content_text}>DesenvolvedorReact-Native</Text>
            <Text style={style.card_content_text}>Desenvolvedor C# (Sharp)</Text>
          </Card>

        </View>
      </ScrollView>


    </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center'
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  fotoDev: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nomeDev: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop: 20,
    //backgroundColor: '#FFDC73',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
});

export default App;
