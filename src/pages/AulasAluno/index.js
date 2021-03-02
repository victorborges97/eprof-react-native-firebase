import React, { useState, ReactFragment, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Content, Form, Item, Input, Label, Textarea, Picker } from 'native-base';
import IconsAwesome from "react-native-vector-icons/FontAwesome";

import InputPadrao from "../../components/InputPadrao"

import { 
  ContainerAluno,
  NomeView,
  Nome,
 } from "./styles"

export default function AulasAluno({ route }) {

  return (
      <ContainerAluno>
        <NomeView>
          <Nome>Aulas do Aluno X</Nome>
        </NomeView>
      </ContainerAluno>
  );
}
