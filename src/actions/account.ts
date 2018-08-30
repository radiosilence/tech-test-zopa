import { TransactionModel } from '../interfaces'

export const PUSH_TRANSACTION = 'PUSH_TRANSACTION'
export type AccountAction = PushTransaction

export interface PushTransaction {
    type: typeof PUSH_TRANSACTION
    transaction: TransactionModel
}

export const pushTransaction = (transaction: TransactionModel) => ({
    type: PUSH_TRANSACTION,
    transaction,
})
