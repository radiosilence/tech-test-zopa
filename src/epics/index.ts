import { combineEpics } from 'redux-observable'
import { formEpics } from './form'

export const rootEpic = combineEpics(formEpics)
