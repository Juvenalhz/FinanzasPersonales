
import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'

import { Cards } from '../components/Cards';
import { Headers } from '../components/Headers';
import { CashContext, cuenta } from '../context/cashContext/CashContext';

export const Inicio = () => {

  const cash = [
    {
      id: 1,
      cuenta: 'Mercantil Panama',
      disponible: 100,
      moneda: '$'
    },
    {
      id: 2,
      cuenta: 'Mercantil Vzla',
      disponible: 100,
      moneda: 'Bs'
    },
    {
      id: 3,
      cuenta: 'Plata',
      disponible: 19900,
      moneda: 'Bs'
    }
  ]

  const Inversiones = [
    {
      id: 1,
      cuenta: 'Binance',
      disponible: 100,
      moneda: '$'
    },
    {
      id: 2,
      cuenta: 'Quantfury',
      disponible: 100,
      moneda: 'Bs'
    },
    {
      id: 3,
      cuenta: 'Biopack',
      disponible: 19900,
      moneda: 'Bs'
    }
  ]

  const porCobrar = [
    {
      id: 1,
      cuenta: 'Juan',
      disponible: 100,
      moneda: '$'
    },
    {
      id: 2,
      cuenta: 'Pedro',
      disponible: 100,
      moneda: 'Bs'
    },
    {
      id: 3,
      cuenta: 'Fernando',
      disponible: 19900,
      moneda: 'Bs'
    }
  ]

  const {cashs} = useContext(CashContext);

  return (

    <>

      <View style={{ flex: 1 }}>
        <Headers titulo={'Inicio'} />

        <ScrollView>
          <Cards data={cashs.cuentas} titulo={'Cash'} />
          {/* <Cards data={porCobrar}  titulo={'Cuentas por Cobrar'}/>
          <Cards data={Inversiones}  titulo={'Inversiones'}/> */}
        </ScrollView>


      </View>


    </>

  )
}

