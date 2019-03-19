import React, { PureComponent } from 'react'
// import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import { Balance } from './Balance'
import { Transactions } from './Transactions'
import { SectionTitle } from './SectionTitle'
import { Pane } from './Pane'
import { loadAccount } from '../actions'

interface AccountProps {}

interface AccountComponentProps extends AccountProps {
  loadAccount: () => void
}

class AccountComponent extends PureComponent<AccountComponentProps> {
  public componentWillMount() {
    this.props.loadAccount()
  }
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

const mapDispatchToProps = {
  loadAccount,
}

export const Account = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountComponent)
