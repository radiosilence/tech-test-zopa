import { createStore, applyMiddleware, compose } from 'redux'
import 'rxjs'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { createRxHttpEpic } from 'redux-rx-http'
import rootReducer from './reducers'
import { RootState } from './interfaces'

import * as io from 'socket.io-client'
import { pushTransaction } from './actions'
import { parseRawTransaction, RawTransactionModel } from './utils'

const rxHttpEpic = createRxHttpEpic((state: RootState) => ({
    baseUrl: '/',
    headers: {
        authorization: 'TODO',
    },
}))
const epicMiddleware = createEpicMiddleware({
    dependencies: { fetch },
})

export default () => {
    const composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(epicMiddleware)),
    )

    epicMiddleware.run(combineEpics(rxHttpEpic))

    const socket = io.connect('http://localhost:5555')

    socket.emit('connection', 'hello')
    socket.on('transaction', (transaction: RawTransactionModel) => {
        store.dispatch(pushTransaction(parseRawTransaction(transaction)))
    })
    return store
}
