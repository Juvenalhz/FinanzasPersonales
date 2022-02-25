import React, { createContext } from "react";

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
  cashs : CashState
}

//creacion de context

export const CashContext = createContext ({} as cashContextProps);

//componente proveedor del estado

export const CashProvider = ( {children} : any ) => {

  return (
    <CashContext.Provider value={{
      cashs : cashInitialState
    }}>
      {children}
    </CashContext.Provider>
  )
}