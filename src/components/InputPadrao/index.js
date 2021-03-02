import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import masks from "../../utils/mascara"

const InputPerfil = ({
  label,
  onChange,
  value,
  field,
  keyboard,
  widthView,
  marginLeft,
  marginRight,
  corBackground,
  corBorder,
  corInput,
  corLabel,
  borderWidth,
  multlines,
  pickerItem,
  children,
  ...other
}) => {

  const styles = StyleSheet.create({
    Dados: {
      minHeight: multlines ? multlines : 50,
      width: widthView ? widthView : "100%",
      marginRight: marginRight && marginRight,
      marginLeft: marginLeft && marginLeft,
      alignItems: 'center',
      justifyContent: multlines ? "flex-start" : "center",
      marginVertical: 15,
      borderColor: corBorder ? corBorder : '#ABABAB',
      borderWidth: borderWidth ? borderWidth : 0.5,
      backgroundColor: corBackground ? corBackground : "#fff",
      borderRadius: 8,
      position: "relative"
    },
    Label: {
      fontSize: 13,
      color: corLabel ? corLabel : '#525252',
      top: -10,
      left: 15,
      position: "absolute",
      backgroundColor: corBackground ? corBackground : "#fff",
      paddingLeft: 3,
      borderRadius: 4,
      paddingRight: 3,
    },
    input: {
      width: '100%',
      fontSize: 15,
      padding: 3,
      color: corInput ? corInput : '#000',
      paddingLeft: 15,
    }
  })

  return (
    <View style={styles.Dados}>

      <Text style={styles.Label}>{label}</Text>

      {
        pickerItem ?
        (
          <Picker
            selectedValue={field ? masks[field](value) : value}
            style={styles.input}
            onValueChange={onChange}>
            {
              children
            }
          </Picker>
        ) : (
          <TextInput
            style={styles.input}
            value={field ? masks[field](value) : value}
            onChangeText={onChange}
            {...other}
          />
        )
      }
      

    </View>
  )
}

export default InputPerfil;