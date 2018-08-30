import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'

interface BalanceProps {}

interface BalanceComponentProps extends BalanceProps {}

const Wrapper = styled.div``

class BalanceComponent extends React.Component<BalanceComponentProps> {
    public render() {
        return <Wrapper />
    }
}

const mapStateToProps = (state: RootState, ownProps: BalanceProps) => ({
    ...ownProps,
})

const mapDispatchToProps = {}

export const Balance = connect(mapStateToProps, mapDispatchToProps)(
    BalanceComponent,
)
