import { createStore, applyMiddleware } from 'redux'
import 'rxjs'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { createRxHttpEpic } from 'redux-rx-http'
import rootReducer from './reducers'
import { RootState, TransactionModel } from './interfaces'

import * as io from 'socket.io-client'
import { pushTransaction } from './actions'

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
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
    epicMiddleware.run(combineEpics(rxHttpEpic))
    const socket = io.connect()
    socket.on('transaction', (transaction: TransactionModel) =>
        store.dispatch(pushTransaction(transaction)),
    )
    return store
}
