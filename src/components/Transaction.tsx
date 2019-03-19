import React, { SFC } from 'react'
import styled from 'styled-components'
import { TransactionModel } from '../interfaces'

interface TransactionProps {
  transaction: TransactionModel
}

const Wrapper = styled.li`
  border-bottom: 1px solid #efefef;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
`
const Left = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`
const Name = styled.span`
  font-size: 18px;
  padding: 5px 0;
`
const Email = styled.span`
  font-size: 14px;
`
const Amount = styled.span`
  flex: 0 0 auto;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
`

export const Transaction: SFC<TransactionProps> = ({ transaction: { name, email, amount } }) => (
  <Wrapper>
    <Left>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Left>
    <Amount>£{amount.toFixed(2)}</Amount>
  </Wrapper>
)
