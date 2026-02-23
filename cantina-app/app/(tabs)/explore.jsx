import { View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';

import BebidasScreen from '../../screens/BebidasScreens';
import LanchesScreen from '../../screens/LanchesScreens';
import SalgadoScreen from '../../screens/SalgadoScreens'



export default function TabTwoScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Bebidas' component={BebidasScreen}/>
        <Tab.Screen name='Lanche' component={LanchesScreen}/>
        <Tab.Screen name='Salgado' component={SalgadoScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
