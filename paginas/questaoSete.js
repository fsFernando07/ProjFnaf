import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoSete(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 7
        </Text>
        <Text style={estilos.texto3}>Qual o nome do Animatronic que era responsável por cuidar das crianças? </Text>
        <Image source={require('../assets/puppet.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("Resul",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Puppet </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("Resul",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Chica  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("Resul",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Bonnie </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("Resul",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Foxy </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}