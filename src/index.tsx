import React from 'react'
import * as ReactDOM from 'react-dom'
import { Root } from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import './validators'

const AlverataBlack = require('./Alverata-Black.otf')

/* tslint:disable:no-unused-expression */
injectGlobal`
    @font-face {
        font-family: Alverata Black;
        src: url('${AlverataBlack}');
    }

    body, html {
        padding: 0;
        margin: 0;
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        background-color: #00B9A5;
        height: 100%;
        color: #1a1a1a;
    }

    h1, h2, h3 {
        font-family: 'Alverata Black';
    }

    #root {
        background-color: white;
        min-height: 100%;
    }
    button:focus {outline:0;}
`
/* tslint:enable:no-unused-expression */

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
