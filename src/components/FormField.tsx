import * as React from 'react'
import styled from 'styled-components'
export interface FormFieldProps {
    name: string
    value: string
    onChange: (a: string) => void
    error?: string
}

const Wrapper = styled.span`
    width: 100%;
    padding: 0 0.5em 0 0.5em;
`
const Input = styled.input`
    font-size: 16px;
    border: 0;
    padding: 10px 0;
    box-sizing: border-box;
    color: #222;
    border-bottom: 3px solid #141e64;
    width: 100%;
`

const ErrorText = styled.span`
    font-size: 0.75em;
    color: #c82222;
`

const mkHandleChange = (name: string, cb: (a: string) => void) => (
    event: React.FormEvent<HTMLInputElement>,
) => {
    event.preventDefault()
    cb(event.currentTarget.value)
}

export const FormField = ({ name, value, onChange, error }: FormFieldProps) => (
    <Wrapper>
        <Input value={value} onChange={mkHandleChange(name, onChange)} />
        <ErrorText>{error}</ErrorText>
    </Wrapper>
)
