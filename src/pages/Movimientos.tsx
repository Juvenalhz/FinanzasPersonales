import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Headers } from '../components/Headers';

export const Movimientos = () => {
  return (<>
    <Headers titulo={'Movimientos'} />
    <View style={{flex:1}}>

      <View style={{ borderRadius: 100, flex: 0.1, flexDirection: 'row', justifyContent:'flex-end'}}>
        <TouchableOpacity style={{ borderRadius: 100, backgroundColor: 'red', flex: 0.15 }}></TouchableOpacity>

        <TouchableOpacity style={{ borderRadius: 100, backgroundColor: 'red', flex: 0.15 }}><Text>Hola</Text></TouchableOpacity>
      </View>
    </View>

  </>
  )
}
