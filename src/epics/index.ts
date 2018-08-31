import { combineEpics } from 'redux-observable'
import { formEpics } from './form'
import { accountEpics } from './account'

export const rootEpic = combineEpics(formEpics, accountEpics)
