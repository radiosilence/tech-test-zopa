import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'

export interface AuthProviderProps {}
export interface AuthProviderComponentProps extends AuthProviderProps {
    authenticated: boolean
}

export class AuthProviderComponent extends React.Component<
    AuthProviderComponentProps
> {
    public componentWillMount() {}

    public render() {
        return this.props.children
    }
}

export const mapStateToProps = (state: RootState) => ({})

export const mapDispatchToProps = {}

export const AuthProvider = connect(mapStateToProps, mapDispatchToProps)(
    AuthProviderComponent,
)
