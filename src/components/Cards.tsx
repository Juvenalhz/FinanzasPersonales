import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Divider } from 'react-native-elements'
import { cuenta } from '../context/cashContext/CashContext'

interface Props {

  data : cuenta[],
  titulo: string
}

// interface cuenta {
//   id: number,
//   cuenta: string,
//   disponible: number,
//   moneda: string
// }

export const Cards = ({data, titulo}:Props) => {
  return (
    <>
    <Card containerStyle={{ borderRadius: 10 }}>
            <Card.Title style={{ fontSize: 25, textAlign: 'left', marginLeft: 10, }}>{titulo}</Card.Title>
            <Card.Divider />
            {data.map((cuenta:cuenta) =>
              <>
                <View style={{ flexDirection: 'row', marginVertical: 10 }} key={cuenta.id}>
                  <Avatar
                    size={40}
                    rounded
                    containerStyle={{ backgroundColor: 'gray' }} />
                  <Text key={cuenta.id} style={styles.item}>{cuenta.nombre}</Text>
                  <View style={styles.monto}>
                    <Text style={styles.item}>{cuenta.moneda}</Text>
                    <Text style={styles.disponible}>{cuenta.disponible}</Text>
                  </View>

                </View>
                <Divider /></>
            )}
          </Card>
    </>
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