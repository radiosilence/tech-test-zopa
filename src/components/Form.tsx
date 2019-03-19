import React, { memo, PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState, FormData } from '../interfaces'
import { SectionTitle } from './SectionTitle'
import { FormField } from './FormField'
import { Pane } from './Pane'
import { Button } from './Button'
import { updateForm, submitForm } from '../actions'
import { getFormData, getFormDirty, getFormErrors } from '../selectors'
import { Dictionary } from 'lodash'

interface FormProps {}

interface FormComponentProps extends FormProps {
  updateForm: (a: string, b: string) => void
  submitForm: () => void
  data: FormData
  dirty: boolean
  errors: Dictionary<string>
}

class FormComponent extends PureComponent<FormComponentProps> {
  public render() {
    const { data, errors } = this.props
    return (
      <Pane>
        <form onSubmit={this.handleSubmit}>
          <SectionTitle>Send money</SectionTitle>
          <FormField label="Name" name="name" value={data.name} error={errors.name} onChange={this.props.updateForm} />
          <FormField
            label="Email address"
            name="email"
            value={data.email}
            error={errors.email}
            onChange={this.props.updateForm}
          />
          <FormField
            label="Amount"
            name="amount"
            value={data.amount}
            error={errors.amount}
            onChange={this.props.updateForm}
          />
          <Button onClick={this.handleSubmit}>Send</Button>
        </form>
      </Pane>
    )
  }

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('submitting')
    this.props.submitForm()
  }
}

const mapStateToProps = (state: RootState, ownProps: FormProps) => ({
  ...ownProps,
  data: getFormData(state),
  dirty: getFormDirty(state),
  errors: getFormErrors(state),
})

const mapDispatchToProps = {
  updateForm,
  submitForm,
}

export const Form = memo(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FormComponent),
)
