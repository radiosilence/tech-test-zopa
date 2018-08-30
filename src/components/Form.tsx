import * as React from 'react'
// import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import { SectionTitle } from './SectionTitle'
import { FormField } from './FormField'
import { Pane } from './Pane'
import { Button } from './Button'

interface FormProps {}

interface FormComponentProps extends FormProps {}

class FormComponent extends React.Component<FormComponentProps> {
    public render() {
        return (
            <Pane>
                <SectionTitle>Send money</SectionTitle>
                <FormField
                    name="name"
                    value="james"
                    error="invalid"
                    onChange={() => {}}
                />
                <Button>Send</Button>
            </Pane>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: FormProps) => ({
    ...ownProps,
})

const mapDispatchToProps = {}

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent)
