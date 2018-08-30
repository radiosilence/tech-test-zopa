import { RootState, TransactionModel } from '../interfaces'
import { createSelector } from 'reselect'
import Decimal from 'decimal.js'

export const getAccountState = (state: RootState) => state.account

export const getBalance = (state: RootState) => getAccountState(state).balance
export const getTransactions = (state: RootState) =>
    getAccountState(state).transactions

export const getSumTransactions = createSelector(
    [getTransactions],
    (transactions: TransactionModel[]) =>
        transactions.reduce(
            (acc: Decimal, t: TransactionModel) => acc.plus(t.amount),
            new Decimal(0),
        ),
)

export const getAvailable = createSelector(
    [getBalance, getSumTransactions],
    (balance: Decimal, sumTransactions: Decimal) =>
        balance.minus(sumTransactions),
)
