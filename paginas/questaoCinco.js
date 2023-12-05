import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoCinco(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 5
        </Text>
        <Text style={estilos.texto3}>Quem foi o primeiro Animatronic criado pelo Scott Cawthon? </Text>
        <Image source={require('../assets/scott.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSeis",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Golden Freddy </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSeis",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Chica </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSeis",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Puppet </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoSeis",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Bonnie </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}