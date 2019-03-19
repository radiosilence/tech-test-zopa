import Decimal from 'decimal.js'

export const formConstraints = (maximum: Decimal) => ({
  name: { length: { minimum: 1 } },
  email: { email: true },
  amount: { decimal: { maximum, minimum: new Decimal(0.01) } },
})
