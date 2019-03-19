import { ActionsObservable, StateObservable, ofType, combineEpics } from 'redux-observable'
import * as validate from 'validate.js'
import { SubmitFormAction, SUBMIT_FORM, postForm, formErrors, POST_FORM } from '../actions'
import { RootState } from '../interfaces'
import { map, mapTo } from 'rxjs/operators'
import { getFormData, getAvailable } from '../selectors'
import { formConstraints } from '../constraints'
import { RxHttpAction } from 'redux-rx-http'

export const submitFormEpic = (action$: ActionsObservable<SubmitFormAction>, state$: StateObservable<RootState>) =>
  action$.pipe(
    ofType(SUBMIT_FORM),
    map(() => {
      const state = state$.value
      const data = getFormData(state)
      const errors = validate(data, formConstraints(getAvailable(state)))
      if (!errors) return postForm(data)
      return formErrors(errors)
    }),
  )
export const clearErrorsOnPost = (action$: ActionsObservable<RxHttpAction>, state$: StateObservable<RootState>) =>
  action$.pipe(
    ofType(POST_FORM.REQUEST),
    mapTo(formErrors({})),
  )

export const formEpics = combineEpics(submitFormEpic, clearErrorsOnPost)
