import { Decimal } from 'decimal.js'
import * as validate from 'validate.js'

validate.validators.decimal = (value: any) => {
    try {
        const amount = new Decimal(value)
        if (amount.lessThan(new Decimal(0.01))) {
            return 'is not a valid positive number'
        }
        return undefined
    } catch (e) {
        return 'is not a valid decimal number'
    }
}
