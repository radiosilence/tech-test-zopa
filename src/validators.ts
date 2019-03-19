import { Decimal } from 'decimal.js'
import * as validate from 'validate.js'

export interface DecimalOptions {
  minimum?: Decimal
  maximum?: Decimal
}

validate.validators.decimal = (value: any, options: DecimalOptions) => {
  try {
    const amount = new Decimal(value)

    if (options.maximum && amount.greaterThan(options.maximum)) {
      return 'is greater than the maximum value'
    }
    if (options.minimum && amount.lessThan(options.minimum)) {
      return 'is less than the minium value'
    }
    return undefined
  } catch (e) {
    return 'is not a valid decimal number'
  }
}
