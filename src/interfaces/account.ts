import { Decimal } from 'decimal.js'

export interface TransactionModel {
  id: string
  name: string
  email: string
  amount: Decimal
}

export interface AccountState {
  balance: Decimal
  transactions: TransactionModel[]
}
