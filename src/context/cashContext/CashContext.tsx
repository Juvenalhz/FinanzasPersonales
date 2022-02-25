import React, { createContext, useReducer } from "react";
import { cashReducer } from "./cashReducer";

//definir que informacion tendre 
export interface CashState {
    cuentas: cuenta []
}

export interface cuenta {
     id: number,
     nombre: string,
     disponible: number,
     moneda: string
}

//estado inicial
export const cashInitialState: CashState = {
    cuentas: [
        {
            id: 1,
            nombre: 'Mercantil Panama',
            disponible: 100,
            moneda: '$'
          },
          {
            id: 2,
            nombre: 'Mercantil Vzla',
            disponible: 100,
            moneda: 'Bs'
          },
          {
            id: 3,
            nombre: 'Plata',
            disponible: 19900,
            moneda: 'Bs'
          }
    ]
}

//como lucira el context
export interface cashContextProps {
  cashs : CashState,
  addCuenta: (cuentaNueva: CashState) => void 
}

//creacion de context

export const CashContext = createContext ({} as cashContextProps);

//componente proveedor del estado

export const CashProvider = ( {children} : any ) => {

  const [cashState, dispatch] = useReducer(cashReducer, cashInitialState);

  const addCuenta = (cuentaNueva : CashState) => {

    dispatch({type:'addCuenta', payload: cuentaNueva})
  }
  

  return (
    <CashContext.Provider value={{
      cashs : cashState,
      addCuenta
    }}>
      {children}
    </CashContext.Provider>
  )
}