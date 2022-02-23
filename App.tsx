import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Inicio } from './src/pages/Inicio';
import { Cash } from './src/pages/Cash';
import { Movimientos } from './src/pages/Movimientos';
import { Inversiones } from './src/pages/Inversiones';
import { PorCobrar } from './src/pages/PorCobrar';
import Ionicons from 'react-native-vector-icons/Ionicons';


 const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
    
    <NavigationContainer >
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveBackgroundColor:'#5DC1B9'}}>
        <Tab.Screen name="Inicio" component={Inicio} options={{tabBarIcon: ({ focused, color, size }) => {
            let iconName;       
              iconName =  '' 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size}  />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}/>
        <Tab.Screen name="Cash" component={Cash} />
        <Tab.Screen name="Movimientos" component={Movimientos} />
        <Tab.Screen name="Por Cobrar" component={PorCobrar} />
        <Tab.Screen name="Inversiones" component={Inversiones} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;