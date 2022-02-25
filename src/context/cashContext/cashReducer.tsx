import { CashState, cuenta } from './CashContext';

//tipos de acciones

type cashAction = {type: 'addCuenta', payload: CashState}

export const cashReducer = (state: CashState, action: cashAction) : CashState => {

    switch (action.type) {
        case 'addCuenta':
            
            return {
                ...state,
                cuentas : action.payload.cuentas
            }
    
        default:
            return state;
    }

    

}