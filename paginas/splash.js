import * as React from 'react';
import { TouchableOpacity , View , Text , Image, ScrollView} from 'react-native';
import{ useNavigation } from '@react-navigation/native';

import estilos from '../css/estilo';
import {playMusic} from '../css/musica';

export default function Splash() {
  const navigation = useNavigation();
  playMusic();
  return(
      <View style={estilos.caixa2}>
          <Image source={require('../assets/background.jpg')} style={estilos.imagem}/>
          <Text style={estilos.texto2}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={estilos.botao}> Entrar </Text>
            </TouchableOpacity>
          </Text>
      </View>
  );
}