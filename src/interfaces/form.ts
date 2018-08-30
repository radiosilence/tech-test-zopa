import { Dictionary } from 'lodash'
import Decimal from 'decimal.js'

export interface FormState {
    data: {
        name: string
        email: string
        amount: Decimal
    }
    dirty: boolean
    errors: Dictionary<string>
}
