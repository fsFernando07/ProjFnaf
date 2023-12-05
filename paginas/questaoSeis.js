import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoSeis(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 6
        </Text>
        <Text style={estilos.texto3}>Em qual noite o phone guy do FNAF 1 morre? </Text>
        <Image source={require('../assets/phoneGuy.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSete",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Noite 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSete",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Noite 3 </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoSete",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Noite 4 </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoSete",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Noite 5 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}