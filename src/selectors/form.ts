import { RootState } from '../interfaces'

export const getFormState = (state: RootState) => state.form
export const getFormData = (state: RootState) => getFormState(state).data
export const getFormDirty = (state: RootState) => getFormState(state).dirty
export const getFormErrors = (state: RootState) => getFormState(state).errors
