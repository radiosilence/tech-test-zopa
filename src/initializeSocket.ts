import * as io from 'socket.io-client'
import { Store } from 'redux'
import { RawTransactionModel, parseRawTransaction } from './utils'
import { pushTransaction } from './actions'

export const initializeSocket = (store: Store) => {
  const socket = io.connect('http://localhost:5555')

  // TODO: Move this code to somewhere more sensible
  socket.emit('connection', 'hello')
  socket.on('transaction', (transaction: RawTransactionModel) => {
    console.log('Transaction!', transaction)
    store.dispatch(pushTransaction(parseRawTransaction(transaction)))
  })
}
