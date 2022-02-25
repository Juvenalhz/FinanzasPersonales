import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Cardsinfo } from '../components/DataCards';
import { Headers } from '../components/Headers';
import { CashContext, cuenta } from '../context/cashContext/CashContext';

export const Cash = () => {

  const { cashs } = useContext(CashContext)
  return (
    <>
      <Headers titulo={'Cash'} />

      <ScrollView style={{ flex: 0.9, marginHorizontal:10, marginVertical:10 }}>

        {cashs.cuentas.map((cuenta: cuenta) =>
          <Cardsinfo cuenta={cuenta} key={cuenta.id} />
        )}


      </ScrollView>

      <TouchableOpacity style={{
        flex: 0.1, backgroundColor: '#5DC1B9',
        marginVertical: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
        marginHorizontal:15
      }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Agregar cuenta</Text>
      </TouchableOpacity>
    </>
  )
}
