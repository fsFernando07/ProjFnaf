import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoDois(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 2
        </Text>
        <Text style={estilos.texto3}>Quem foi a vítima da famosa mordida de 83 </Text>
        <Image source={require('../assets/GoldenFreddy.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoTres",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Criança Chorona </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoTres",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Michael Afton </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoTres",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Henry Emilly </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoTres",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) William Afton </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}