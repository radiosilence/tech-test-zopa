import Decimal from 'decimal.js'

export const UPDATE_FORM = 'UPDATE_FORM'
export const CLEAR_FORM = 'CLEAR_FORM'

export type FormAction = UpdateFormAction | ClearFormAction

export interface UpdateFormAction {
    type: typeof UPDATE_FORM
    field: string
    value: string | Decimal
}
export interface ClearFormAction {
    type: typeof CLEAR_FORM
}

export const updateForm = (
    field: string,
    value: string | Decimal,
): UpdateFormAction => ({
    type: UPDATE_FORM,
    field,
    value,
})

export const clearForm = (): ClearFormAction => ({
    type: CLEAR_FORM,
})
