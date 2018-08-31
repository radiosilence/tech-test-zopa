import { Dictionary } from 'lodash'

export interface FormData {
    name: string
    email: string
    amount: string
}
export interface FormState {
    data: FormData
    dirty: boolean
    errors: Dictionary<string>
}
