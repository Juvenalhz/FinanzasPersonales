import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Headers } from '../components/Headers';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

export const Movimientos = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (<>
    <Headers titulo={'Movimientos'} />
    <View style={{ flex: 1 }}>


      <ScrollView>




        <Card containerStyle={styles.card}>
          <View style={styles.fila}>
            <View style={[styles.fila, styles.rowtitulo]}>
              <Icon name={'cash-outline'} size={30} color={'#5DC1B9'} style={styles.iconoTitulo} />
              <View >
                <Text style={styles.titulo}>Ingreso Salario</Text>
                <Text style={styles.subtitulo}>Jun 12 2022 5:00pm </Text>
                <Text style={styles.subtitulo}>Cuenta : Panama </Text>
              </View>
            </View>
            <View style={styles.fila}>
              <Text style={[styles.monto, { color: '#5DC1B9' }]}>$ 100 </Text>
              <Icon name={'arrow-down-outline'} size={20} color={'#5DC1B9'} />
            </View>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.fila}>
            <View style={styles.fila}>
              <Icon name={'log-out-outline'} size={30} color={'red'} style={styles.iconoTitulo} />
              <View>
                <Text style={styles.titulo}>Ingreso Salario</Text>
                <Text style={styles.subtitulo}>Jun 12 2022 5:00pm</Text>
                <Text style={styles.subtitulo}>Cuenta : Cash </Text>
              </View>
            </View>
            <View style={styles.fila}>
              <Text style={[styles.monto, { color: 'red' }]}>$ 20 </Text>
              <Icon name={'arrow-up-outline'} size={20} color={'red'} />
              
            </View>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.fila}>
            <View style={styles.fila}>
              <Icon name={'log-out-outline'} size={30} color={'red'} style={styles.iconoTitulo} />
              <View>
                <Text style={styles.titulo}>Ingreso Salario</Text>
                <Text style={styles.subtitulo}>Jun 12 2022 5:00pm</Text>
                <Text style={styles.subtitulo}>Cuenta : Bss </Text>
              </View>
            </View>
            <View style={styles.fila}>
              <Text style={[styles.monto, { color: 'red' }]}>Bs 120 </Text>
              <Icon name={'arrow-up-outline'} size={20} color={'red'} />
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>

    <View style={{ borderRadius: 100, height: windowHeight * 0.05, flexDirection: 'row', marginVertical: 10 }}>
      <TouchableOpacity style={[styles.btn, styles.ingreso]}>
        <Text style={styles.btntext} >Ingreso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.egreso]}>
        <Text style={styles.btntext} >Egreso</Text>
      </TouchableOpacity>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 18,
    fontWeight: '600'
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: '300'
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  card: {
    margin: 10,
    borderRadius: 20
  },
  monto: {
    fontSize: 18,
    fontWeight: '500'
  },
  rowtitulo: {},
  iconoTitulo: {
    alignSelf: 'center',
    marginRight: 10
  },
  btn: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  egreso: {
    backgroundColor: '#fc8e86',
    borderColor: 'red',
  },
  ingreso: {
    backgroundColor: '#96efd5',
    borderColor: '#5DC1B9',
  },
  btntext: {

    fontSize: 16,
    color: 'black',
    fontWeight: '500'

  }
}); 
