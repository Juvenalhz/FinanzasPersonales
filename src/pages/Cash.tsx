import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonGroup, Input, Overlay } from 'react-native-elements';
import { Cardsinfo } from '../components/DataCards';
import { Headers } from '../components/Headers';
import { CashContext, CashState, cuenta } from '../context/cashContext/CashContext';

export const Cash = () => {

  const { cashs, addCuenta } = useContext(CashContext);

  const [visible, setVisible] = useState(false);

  const [nuevaCuenta, setnuevaCuenta] = useState<CashState>()

  const [nuevaData, setnuevaData] = useState<cuenta>()
 

  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleOverlay = () => {
    setVisible(!visible);
  };


  return (
    <>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', height: '60%', borderRadius: 20, justifyContent: 'center' }}>
        <ScrollView >
          <Text style={styles.textPrimary}>Registro de Cuenta</Text>
          <View style={{ marginHorizontal: 20 }} >
            <Input 
              placeholder='Nombre de Cuenta' onChange={value => setnuevaData( {...nuevaData?, [nombre] : value} )} autoCompleteType={undefined}  />
            <Input 
            placeholder='Monto Disponible'  autoCompleteType={undefined} />
            {/* <Input
              placeholder='Tipo de Cuenta' autoCompleteType={undefined} /> */}
            <ButtonGroup 
            selectedButtonStyle={{backgroundColor:'#5DC1B9'}}
            buttonStyle={{borderRadius:20}}
              buttons={['Bs', '$']}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
                
              }}
              containerStyle={{ marginBottom: 20, borderRadius:20 }}
            />
          </View>

          <TouchableOpacity style={{
            width: '70%', height: '10%', backgroundColor: '#5DC1B9',
            marginVertical: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
            marginHorizontal: 15, alignSelf: 'center'
          }} onPress= {() => {

            //addCuenta(nuevaCuenta)
          }}><Text style={{ color: 'white', fontSize: 18 }}>Registrar</Text></TouchableOpacity>
        </ScrollView>
      </Overlay>

      <Headers titulo={'Cash'} />

      <ScrollView style={{ flex: 0.9, marginHorizontal: 25, marginVertical: 20 }}>

        {cashs.cuentas.map((cuenta: cuenta) =>
          <Cardsinfo cuenta={cuenta} key={cuenta.id} />
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