import { ActionsObservable, ofType, combineEpics } from 'redux-observable'
import { RxHttpSuccessAction } from 'redux-rx-http'
import { map } from 'rxjs/operators'
import { LOAD_ACCOUNT, setAccount } from '../actions'
import Decimal from 'decimal.js'
import { parseRawTransaction } from '../utils'

export const accountLoadSuccessEpic = (action$: ActionsObservable<RxHttpSuccessAction>) =>
  action$.pipe(
    ofType(LOAD_ACCOUNT.SUCCESS),
    map(({ result }) =>
      setAccount({
        ...result,
        balance: new Decimal(result.balance),
        transactions: result.transactions.map(parseRawTransaction),
      }),
    ),
  )

export const accountEpics = combineEpics(accountLoadSuccessEpic)
