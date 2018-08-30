import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import { Balance } from './Balance'
import { Transactions } from './Transactions'

interface AccountProps {}

interface AccountComponentProps extends AccountProps {}

const Wrapper = styled.div``
const Title = styled.h1``

class AccountComponent extends React.Component<AccountComponentProps> {
    public render() {
        return (
            <Wrapper>
                <Title>My account</Title>
                <Balance />
                <Transactions />
            </Wrapper>
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
