import { TransactionModel, AccountState } from '../interfaces'
import { rxHttpGet, createRxHttpActionTypes } from 'redux-rx-http'

export const PUSH_TRANSACTION = 'PUSH_TRANSACTION'
export const SET_ACCOUNT = 'SET_ACCOUNT'
export const LOAD_ACCOUNT = createRxHttpActionTypes('LOAD_ACCOUNT')

export type AccountAction = PushTransactionAction | SetAccountAction

export interface PushTransactionAction {
  type: typeof PUSH_TRANSACTION
  transaction: TransactionModel
}
export interface SetAccountAction {
  type: typeof SET_ACCOUNT
  account: AccountState
}

export const pushTransaction = (transaction: TransactionModel): PushTransactionAction => ({
  type: PUSH_TRANSACTION,
  transaction,
})

export const setAccount = (account: AccountState): SetAccountAction => ({
  type: SET_ACCOUNT,
  account,
})

export const loadAccount = () => rxHttpGet('/account', LOAD_ACCOUNT)
