import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function Resul(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Image source={require('../assets/SeisDaManha.jpg')} style={estilos.imagemQ}/>
        <Text style={estilos.paragraph}>
           Você acertou {acertos} questões!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={estilos.botao}> Jogar Novamente </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}