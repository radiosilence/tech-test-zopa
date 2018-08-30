import { AccountState } from '../interfaces'
import { Decimal } from 'decimal.js'
import { AccountAction, PUSH_TRANSACTION } from '../actions'

export const initialState: AccountState = {
    balance: new Decimal(5000.0),
    transactions: [
        {
            id: 'asd',
            name: 'Trevor',
            amount: new Decimal(250.0),
            email: 'trevor@gmail.com',
        },
    ],
}

export default (state: AccountState = initialState, action: AccountAction) => {
    switch (action.type) {
        case PUSH_TRANSACTION:
            return {
                ...state,
                transactions: [action.transaction, ...state.transactions],
            }
    }
    return state
}
