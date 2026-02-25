import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '../../components/ui/icon-symbol';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name='index' 
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <IconSymbol name="house" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name='Bebidas' 
        options={{
          title: "Bebidas",
          tabBarIcon: ({ color }) => <IconSymbol name="cup.and.saucer" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name='Salgados' 
        options={{
          title: "Salgados",
          tabBarIcon: ({ color }) => <IconSymbol name="takeoutbag.and.cup.and.straw" size={24} color={color} />
        }} 
      />
      {/* Escondendo as telas de login e cadastro da barra de abas */}
      <Tabs.Screen 
        name='login' 
        options={{
          href: null, // aqui remove a opção da tela de login da barra de abas do aplicativo 
        }} 
      />
      <Tabs.Screen 
        name='cadastro' 
        options={{
          href: null, // aqui remove a opção da tela de cadastro da barra de abas do aplicativo 
        }} 
      />
    </Tabs>
  );
}
