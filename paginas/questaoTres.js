import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity, Image,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function QuestaoTres(props){
  const navigation = useNavigation();
  let {acertos,erros} = props.route.params;
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Questão 3
        </Text>
        <Text style={estilos.texto3}>Quem deu a mordida de 83? </Text>
        <Image source={require('../assets/fredbear.jpg')} style={estilos.imagemQ}/>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoQuatro",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> A) Spring Bonnie  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            acertos++;
            navigation.navigate("QuestaoQuatro",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> B) Fredbear </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoQuatro",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> C) Freddy Fazbear  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.questao} 
          onPress={() => {
            navigation.navigate("QuestaoQuatro",{acertos,erros});
          }}
        >
            <Text style={estilos.texto3}> D) Golden Freddy </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}