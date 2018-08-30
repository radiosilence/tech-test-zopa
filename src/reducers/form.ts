import { FormState } from '../interfaces'
import Decimal from 'decimal.js'
import { FormAction, CLEAR_FORM, UPDATE_FORM } from '../actions'

const initialState: FormState = {
    data: {
        name: '',
        email: '',
        amount: new Decimal(0.0),
    },
    dirty: false,
    errors: {},
}

export default (state: FormState = initialState, action: FormAction) => {
    switch (action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.field]: action.value,
                },
                dirty: true,
            }
        case CLEAR_FORM:
            return initialState
    }
    return state
}
