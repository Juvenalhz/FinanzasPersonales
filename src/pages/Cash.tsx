import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonGroup, Input, Overlay } from 'react-native-elements';
import { Cardsinfo } from '../components/DataCards';
import { Headers } from '../components/Headers';
import { CashContext, CashState, cuenta } from '../context/cashContext/CashContext';

export const Cash = () => {

  const { cashs, addCuenta } = useContext(CashContext);

  const [visible, setVisible] = useState(false);



  const [nuevaData, setnuevaData] = useState<cuenta>({
    id: 0,
    nombre: '',
    moneda: 'Bs',
    disponible: 0
  })

  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleOverlay = () => {
    setVisible(!visible);
    setnuevaData({id: 0,
      nombre: '',
      moneda: 'Bs',
      disponible: 0})
  };

  const ordenando = (e: string) => {
    setnuevaData({ ...nuevaData, nombre: e })
  }

  const aggCuenta = () => {

    addCuenta({cuentas:[nuevaData, {...nuevaData, id: (Math.random() * 10) + 1}]});

    setnuevaData({id: 0,
    nombre: '',
    moneda: 'Bs',
    disponible: 0})

    setVisible(!visible);
  }

  const montoDisponible = (e : string) => {

    //cuando el valor introducido es vacio agrega cero
    if (e == '') {
      setnuevaData({ ...nuevaData, disponible: parseInt('0 ') })
    } else setnuevaData({ ...nuevaData, disponible: parseInt(e) })
  }
  const modificarCuenta = (cuenta: cuenta) => {

    //cuando el valor introducido es vacio agrega cero
    setnuevaData(cuenta);
    setVisible(!visible);

  }
  

  return (
    <>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', height: '65%', borderRadius: 20, justifyContent: 'center' }}>
        <ScrollView >
          <Text style={styles.textPrimary}>Registro de Cuenta</Text>
          <View style={{ marginHorizontal: 20 }} >
            <Input
              label='Nombre de Cuenta' value={nuevaData.nombre} onChangeText={(e: string) => ordenando(e)} autoCompleteType={undefined} />
            <Input label='Monto Disponible'
               autoCompleteType={undefined} value={nuevaData.disponible.toString()} onChangeText={(e: string) =>montoDisponible(e) } />
            {/* <Input
              placeholder='Tipo de Cuenta' autoCompleteType={undefined} /> */}
            <ButtonGroup
              selectedButtonStyle={{ backgroundColor: '#5DC1B9' }}
              buttonStyle={{ borderRadius: 20 }}
              buttons={['Bs', '$']}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
                console.log(selectedIndex);
                setnuevaData({ ...nuevaData, moneda: value == 1 ? '$' : 'Bs' })

              }}
              containerStyle={{ marginBottom: 20, borderRadius: 20 }}
            />
            {/* <Text>{JSON.stringify(nuevaData)}</Text> */}
          </View>

          <TouchableOpacity style={{
            width: '70%', height: '10%', backgroundColor: '#5DC1B9',
            marginVertical: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
            marginHorizontal: 15, alignSelf: 'center'
          }} onPress={ () => aggCuenta()
          }><Text style={{ color: 'white', fontSize: 18 }}>Registrar</Text></TouchableOpacity>
        </ScrollView>
      </Overlay>

      <Headers titulo={'Cash'} />

      <ScrollView style={{ flex: 0.9, marginHorizontal: 25, marginVertical: 20 }}>

        {cashs.cuentas.map((cuenta: cuenta) =>
        <TouchableOpacity  key={cuenta.id} onPress={() => modificarCuenta(cuenta)}>
          <Cardsinfo cuenta={cuenta} key={cuenta.id} />
        </TouchableOpacity>
        )}


      </ScrollView>

      <TouchableOpacity style={{
        flex: 0.1, backgroundColor: '#5DC1B9',
        marginVertical: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
        marginHorizontal: 15
      }} onPress={toggleOverlay}>
        <Text style={{ color: 'white', fontSize: 18 }}>Agregar cuenta</Text>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});