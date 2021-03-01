import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconsAwesome from "react-native-vector-icons/FontAwesome"

import { colors } from "../../config.json"

import Perfil from "../pages/Perfil"
import Pagamentos from "../pages/Pagamentos"
import Agenda from "../pages/Agenda"
import Dashboard from "../pages/Dashboard"
import DadosAluno from "../pages/DadosAluno"

const HomeStack = createStackNavigator();

function Alunos() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: "e-Prof",
        headerTitleAlign:"center",
        headerTitleAllowFontScaling:true,
        headerTintColor:colors.background,
        headerStyle: {
          backgroundColor: colors.primary
        }
      }}
    >
      <HomeStack.Screen name="Alunos" component={Dashboard} />
      <HomeStack.Screen name="Dados" component={DadosAluno} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Alunos"
        tabBarOptions={{
          activeTintColor: colors.tab__bar_active,
          inactiveTintColor: colors.tab__bar_inative,
          activeBackgroundColor: colors.primary,
          inactiveBackgroundColor: colors.primary,
        }}
        >
        <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <IconsAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Alunos" 
        component={Alunos} 
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: ({ color, size }) => (
            <IconsAwesome name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Agenda" 
        component={Agenda} 
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color, size }) => (
            <IconsAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Pagamentos" 
        component={Pagamentos} 
        options={{
          tabBarLabel: 'Pagamentos',
          tabBarIcon: ({ color, size }) => (
            <IconsAwesome name="money" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
