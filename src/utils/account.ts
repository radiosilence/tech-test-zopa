import Decimal from 'decimal.js'

export interface RawTransactionModel {
    id: string
    name: string
    email: string
    amount: string
}
export const parseRawTransaction = (raw: RawTransactionModel) => ({
    id: raw.id,
    name: raw.name,
    email: raw.email,
    amount: new Decimal(raw.amount),
})
