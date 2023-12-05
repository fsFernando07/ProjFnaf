import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,SafeAreaView, TextInput, TouchableOpacity,View} from 'react-native';
import {useState} from 'react';
import{ useNavigation } from '@react-navigation/native';

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import estilos from '../css/estilo';

const Tab = createBottomTabNavigator();

export default function Login(){
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const navigation = useNavigation();

  function validacao(){
      if(email==='' || senha === ''){
        alert("Preencha os campos");
        return;
      }
      if(email == 'william.afton@gmail.com' && senha == '5kids'){
        navigation.navigate('Home');
      }else {
        alert('Email ou senha está incorreto');
      }
  }
  return(
    <SafeAreaView style={estilos.container}>
      <View style={estilos.caixa}>
        <Text style={estilos.paragraph}>
           Login
        </Text>

        <Text style={estilos.texto3}> Email </Text>
        <TextInput style={estilos.input} value={email} onChangeText={setEmail} placeholder="Digite seu email"/>
        <Text style={estilos.texto3}> Senha </Text>
        <TextInput style={estilos.input} value={senha} onChangeText={setSenha} placeholder="Digite sua senha"/>
        <TouchableOpacity style={estilos.botao} onPress={validacao}>
            <Text style={estilos.texto3}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}