import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Inicio } from './src/pages/Inicio';
import { Cash } from './src/pages/Cash';
import { Movimientos } from './src/pages/Movimientos';
import { Inversiones } from './src/pages/Inversiones';
import { PorCobrar } from './src/pages/PorCobrar';
import Icon from 'react-native-vector-icons/Ionicons';
import { CashProvider } from './src/context/cashContext/CashContext';


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>

      <NavigationContainer >
        <CashProvider>
          <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;

              if (route.name === 'Inicio') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Cash') {
                iconName = focused ? 'card' : 'card-outline';
              }
              else if (route.name === 'Movimientos') {
                iconName = focused ? 'trending-up' : 'trending-up-outline';
              }
              else if (route.name === 'Por Cobrar') {
                iconName = focused ? 'receipt' : 'receipt-outline';
              }
              else if (route.name === 'Inversiones') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName!} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#5DC1B9',
            tabBarInactiveTintColor: 'gray',
          })} 



          >
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