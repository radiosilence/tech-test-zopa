import * as React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import './App.css'

import createStore from '../create-store'
import { Form } from './Form'
import { Account } from './Account'

const Wrapper = styled.main``

class Root extends React.Component {
    public render() {
        return (
            <Provider store={createStore()}>
                <Wrapper>
                    <Form />
                    <Account />
                </Wrapper>
            </Provider>
        )
    }
}

export default Root
