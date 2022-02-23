import React from 'react'
import { StyleSheet } from 'react-native';
import {  Header  } from 'react-native-elements'

interface Props {
  titulo : string
}

export const Headers = ({titulo} : Props) => {
  return (
   
     <Header
        backgroundColor='#5DC1B9'
        centerComponent={{ text: titulo, style: styles.heading }}
      />
   
  )
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  }
});
