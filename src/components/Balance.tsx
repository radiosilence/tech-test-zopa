import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import { getSent, getAvailable } from '../selectors'
import Decimal from 'decimal.js'
const DonutChart = require('react-svg-donut-chart').default

interface BalanceProps {}

interface BalanceComponentProps extends BalanceProps {
  sent: Decimal
  available: Decimal
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Sent = styled.div`
  padding: 50px 0;
  text-align: right;
  width: 40%;
`
const Donut = styled.div`
  padding: 40px 20px;
  width: 20%;
`
const Available = styled.div`
  padding: 50px 0;
  text-align: left;
  width: 40%;
`
const Value = styled.div`
  font-weight: bold;
  font-size: 16px;
`

const Key = styled.div`
  font-size: 14px;
`

class BalanceComponent extends React.Component<BalanceComponentProps> {
  public render() {
    return (
      <Wrapper>
        <Sent>
          <Value>£{this.props.sent.toFixed(2)}</Value>
          <Key>total sent</Key>
        </Sent>
        <Donut>
          <DonutChart
            data={[
              {
                stroke: '#FDB33B',
                strokeWidth: 10,
                value: this.props.available.toNumber(),
              },
              {
                stroke: '#EAEAEE',
                strokeWidth: 10,
                value: this.props.sent.toNumber(),
              },
            ]}
            spacing={0}
          />
        </Donut>
        <Available>
          <Value>£{this.props.available.toFixed(2)}</Value>
          <Key>left available</Key>
        </Available>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: RootState, ownProps: BalanceProps) => ({
  ...ownProps,
  sent: getSent(state),
  available: getAvailable(state),
})

const mapDispatchToProps = {}

export const Balance = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceComponent)
