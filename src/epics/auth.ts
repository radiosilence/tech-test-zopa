import { RxHttpGlobalErrorAction, RX_HTTP_ERROR } from 'redux-rx-http'
import { ActionsObservable, ofType } from 'redux-observable'

export const handleDeauthedEpic = (
    action$: ActionsObservable<RxHttpGlobalErrorAction>,
) => action$.pipe(ofType(RX_HTTP_ERROR))
