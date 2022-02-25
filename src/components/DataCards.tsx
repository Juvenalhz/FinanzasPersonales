
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Divider } from 'react-native-elements' 
import { cuenta } from '../context/cashContext/CashContext'

interface propsData {
    cuenta: cuenta
  }
  export const Cardsinfo = ({cuenta} : propsData) => {
    return (
      <>
                  <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Avatar
                      size={40}
                      rounded
                      containerStyle={{ backgroundColor: 'gray' }} />
                    <Text style={styles.item}>{cuenta.nombre}</Text>
                    <View style={styles.monto}>
                      <Text style={styles.item}>{cuenta.moneda}</Text>
                      <Text style={styles.disponible}>{cuenta.disponible}</Text>
                    </View>
  
                  </View>
                  <Divider /></>
    )
  }

  
const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 20,
      height: 50,
      fontWeight: '500',
      color: 'black',
      alignItems: 'center',
  
    },
    disponible: {
      padding: 10,
      fontSize: 25,
      height: 50,
      fontWeight: '600',
      color: 'black'
    },
    monto: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1
    },
  });