import * as React from 'react'
// import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import { Balance } from './Balance'
import { Transactions } from './Transactions'
import { SectionTitle } from './SectionTitle'
import { Pane } from './Pane'

interface AccountProps {}

interface AccountComponentProps extends AccountProps {}

class AccountComponent extends React.Component<AccountComponentProps> {
    public render() {
        return (
            <Pane>
                <SectionTitle>My account</SectionTitle>
                <Balance />
                <Transactions />
            </Pane>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: AccountProps) => ({
    ...ownProps,
})

const mapDispatchToProps = {}

export const Account = connect(mapStateToProps, mapDispatchToProps)(
    AccountComponent,
)
