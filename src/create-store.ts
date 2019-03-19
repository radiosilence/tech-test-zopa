import { createStore, applyMiddleware, compose } from 'redux'
import 'rxjs'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { createRxHttpEpic } from 'redux-rx-http'
import rootReducer from './reducers'
import { RootState } from './interfaces'

import { rootEpic } from './epics'
import { initializeSocket } from './initializeSocket'

const rxHttpEpic = createRxHttpEpic((state: RootState) => ({
  baseUrl: 'http://localhost:5555',
  headers: {
    'content-type': 'application/json',
  },
}))
const epicMiddleware = createEpicMiddleware({
  dependencies: { fetch },
})

export default () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

  epicMiddleware.run(combineEpics(rxHttpEpic, rootEpic))
  initializeSocket(store)
  return store
}
