import * as React from 'react';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import{ useNavigation } from '@react-navigation/native';

import estilos from '../css/estilo';

export default function Home(){
  const navigation = useNavigation();
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Image source={require('../assets/helpy.jpg')} style={estilos.imagem}/>
        <TouchableOpacity onPress={() => navigation.navigate('QuestaoUm')}>
            <Text style={estilos.botao}>
              Jogar
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}