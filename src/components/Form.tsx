import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'

interface FormProps {}

interface FormComponentProps extends FormProps {}

const Wrapper = styled.div``

class FormComponent extends React.Component<FormComponentProps> {
    public render() {
        return <Wrapper />
    }
}

const mapStateToProps = (state: RootState, ownProps: FormProps) => ({
    ...ownProps,
})

const mapDispatchToProps = {}

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent)
