import { AccountState } from './account'
import { FormState } from './form'
export interface RootState {
    account: AccountState
    form: FormState
}
