import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image, View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoUm(){
  const navigation = useNavigation();
  let acertos = 0;
  let erros = 0;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 1
        </Text>
        <Text style={estilos.texto3}>Quem foi a primeira vítima do William Afton? </Text>
        <Image source={require('../assets/susie.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoDois",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Chica </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoDois",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Bonnie </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoDois",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Freddy  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoDois",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Foxy </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}