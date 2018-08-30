import { AuthState } from '../interfaces'

const initialState = {
    initialized: false,
    authenticated: false,
}

export default (state: AuthState = initialState, action: any) => state
