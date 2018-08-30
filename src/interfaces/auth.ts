export interface TokenPayload {
    iat: number
    exp: number
    email: string
}

export interface AuthState {
    initialized: boolean
    authenticated: boolean
    expiry?: number
    tokenPayload?: TokenPayload
}
