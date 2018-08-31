import { FormState } from '../interfaces'
import { FormAction, CLEAR_FORM, UPDATE_FORM, FORM_ERRORS } from '../actions'

const initialState: FormState = {
    data: {
        name: 'James',
        email: 'jc@blit.cc',
        amount: '100.00',
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
        case FORM_ERRORS:
            return {
                ...state,
                errors: action.errors,
            }
        case CLEAR_FORM:
            return initialState
    }
    return state
}
