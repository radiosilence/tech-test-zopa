import Decimal from 'decimal.js'
import { FormData } from '../interfaces'
import { rxHttpPost, createRxHttpActionTypes } from 'redux-rx-http'
import { Dictionary } from 'lodash'

export const UPDATE_FORM = 'UPDATE_FORM'
export const CLEAR_FORM = 'CLEAR_FORM'
export const SUBMIT_FORM = 'SUBMIT_FORM'
export const POST_FORM = createRxHttpActionTypes('POST_FORM')
export const FORM_ERRORS = 'FORM_ERRORS'

export interface UpdateFormAction {
    type: typeof UPDATE_FORM
    field: string
    value: string | Decimal
}
export interface ClearFormAction {
    type: typeof CLEAR_FORM
}

export interface SubmitFormAction {
    type: typeof SUBMIT_FORM
}

export interface FormErrorsAction {
    type: typeof FORM_ERRORS
    errors: Dictionary<string>
}

export type FormAction =
    | UpdateFormAction
    | ClearFormAction
    | SubmitFormAction
    | FormErrorsAction

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

export const submitForm = (): SubmitFormAction => ({
    type: SUBMIT_FORM,
})

export const postForm = (data: FormData) =>
    rxHttpPost('/transaction', POST_FORM, data)

export const formErrors = (errors: Dictionary<string>): FormErrorsAction => ({
    type: FORM_ERRORS,
    errors,
})
