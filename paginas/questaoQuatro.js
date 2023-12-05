import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoQuatro(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 4
        </Text>
        <Text style={estilos.texto3}>Qual é a verdadeira identidade do Springtrap? </Text>
        <Image source={require('../assets/springTrap.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoCinco",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Henry Emilly </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoCinco",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) William Schmidt  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoCinco",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) William Afton </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoCinco",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Michael Afton </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}