import * as React from 'react'
import styled from 'styled-components'
export interface FormFieldProps {
    name: string
    value: string
    label: string
    onChange: (a: string, b: string) => void
    error?: string
}

const Wrapper = styled.span`
    width: 100%;
    padding: 0;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    font-size: 16px;
    border: 0;
    padding: 10px 0;
    box-sizing: border-box;
    color: #222;
    border-bottom: 3px solid #cccccc;
    width: 100%;
`

const Label = styled.span`
    font-size: 16px;
    padding: 10px 0;
    box-sizing: border-box;
`

const ErrorText = styled.span`
    font-size: 14px;
    color: #f86666;
    margin: 0.5em 0 2em 0;
`

const mkHandleChange = (name: string, cb: (a: string, b: string) => void) => (
    event: React.FormEvent<HTMLInputElement>,
) => {
    event.preventDefault()
    cb(name, event.currentTarget.value)
}

export const FormField = ({
    name,
    value,
    label,
    onChange,
    error,
}: FormFieldProps) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input value={value} onChange={mkHandleChange(name, onChange)} />
        <ErrorText>{error}</ErrorText>
    </Wrapper>
)
