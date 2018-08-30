import { RootState } from '../interfaces'
import { get } from 'lodash'

export const getAuthState = (state: RootState) => state.auth

export const getAuthInitialized = (state: RootState) =>
    getAuthState(state).initialized

export const getAuthTokenPayload = (state: RootState) =>
    getAuthState(state).tokenPayload

export const getAuthExpiry = (state: RootState) => getAuthState(state).expiry

export const getAuthenticated = (state: RootState) =>
    getAuthInitialized(state) && (getAuthExpiry(state) || 0) > Date.now() / 1000

export const getEmail = (state: RootState) =>
    get(getAuthTokenPayload(state), 'email', undefined)
