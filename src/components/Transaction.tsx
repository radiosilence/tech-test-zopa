import * as React from 'react'
import styled from 'styled-components'
import { TransactionModel } from '../interfaces'

interface TransactionProps {
    transaction: TransactionModel
}

const Wrapper = styled.li``
const Left = styled.span``
const Name = styled.span``
const Email = styled.span``
const Amount = styled.span``

export const Transaction = ({
    transaction: { name, email, amount },
}: TransactionProps) => (
    <Wrapper>
        <Left>
            <Name>{name}</Name>
            <Email>{email}</Email>
        </Left>
        <Amount>{amount}</Amount>
    </Wrapper>
)
