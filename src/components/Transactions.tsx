import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState, TransactionModel } from '../interfaces'
import { Transaction } from './Transaction'
import { getTransactions } from '../selectors/account'

interface TransactionsProps {}

interface TransactionsComponentProps extends TransactionsProps {
    transactions: TransactionModel[]
}

const Wrapper = styled.div``
const Title = styled.h2``
const TransactionList = styled.ol``

class TransactionsComponent extends React.Component<
    TransactionsComponentProps
> {
    public render() {
        return (
            <Wrapper>
                <Title>Transactions</Title>
                <TransactionList>
                    {this.props.transactions.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                </TransactionList>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: TransactionsProps) => ({
    ...ownProps,
    transactions: getTransactions(state),
})

const mapDispatchToProps = {}

export const Transactions = connect(mapStateToProps, mapDispatchToProps)(
    TransactionsComponent,
)
