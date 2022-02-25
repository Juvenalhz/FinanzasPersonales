import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Inicio } from './src/pages/Inicio';
import { Cash } from './src/pages/Cash';
import { Movimientos } from './src/pages/Movimientos';
import { Inversiones } from './src/pages/Inversiones';
import { PorCobrar } from './src/pages/PorCobrar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CashProvider } from './src/context/cashContext/CashContext';


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>

      <NavigationContainer >
        <CashProvider>
          <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: '#5DC1B9' }}>
            <Tab.Screen name="Inicio" component={Inicio} />
            <Tab.Screen name="Cash" component={Cash} />
            <Tab.Screen name="Movimientos" component={Movimientos} />
            <Tab.Screen name="Por Cobrar" component={PorCobrar} />
            <Tab.Screen name="Inversiones" component={Inversiones} />
          </Tab.Navigator>
        </CashProvider>
      </NavigationContainer>
    </>
  )
}

export default App;