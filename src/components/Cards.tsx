import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Divider } from 'react-native-elements'
import { cuenta } from '../context/cashContext/CashContext';
import { Cardsinfo } from './DataCards';

interface Props {
  titulo: string,
  data: cuenta[]
}

export const Cards = ({ data, titulo}:Props) => {
  //const {cashs} = useContext(CashContext)
  return (
    <>
    <Card containerStyle={{ borderRadius: 10 }}>
            <Card.Title style={{ fontSize: 25, textAlign: 'left', marginLeft: 10, }}>{titulo}</Card.Title>
            <Card.Divider />
            {data.map((cuenta:cuenta) =>
              <Cardsinfo cuenta={cuenta} key={cuenta.id}/>
            )}
          </Card>
    </>
  )
}



