import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button , View ,Image } from 'react-native';
import{ createStackNavigator} from '@react-navigation/stack';

import Splash from './paginas/splash';
import Login from './paginas/login';
import Home from './paginas/home';
import QuestaoUm from './paginas/questaoUm';
import QuestaoDois from './paginas/questaoDois';
import QuestaoTres from './paginas/questaoTres';
import QuestaoQuatro from './paginas/questaoQuatro';
import QuestaoCinco from './paginas/questaoCinco';
import QuestaoSeis from './paginas/questaoSeis';
import QuestaoSete from './paginas/questaoSete';
import Resul from './paginas/resul';

const Telas = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator>
        <Telas.Screen name="Splash" component={Splash} options={{headerShown: false,}} />
        <Telas.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Telas.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoUm" component={QuestaoUm} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoDois" component={QuestaoDois} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoTres" component={QuestaoTres} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoQuatro" component={QuestaoQuatro} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoCinco" component={QuestaoCinco} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoSeis" component={QuestaoSeis} options={{headerShown: false,}}/>
        <Telas.Screen name="QuestaoSete" component={QuestaoSete} options={{headerShown: false,}}/>
        <Telas.Screen name="Resul" component={Resul} options={{headerShown: false,}}/>
      </Telas.Navigator>
    </NavigationContainer>
  );
}