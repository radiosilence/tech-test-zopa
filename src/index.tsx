import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Root } from './components/Root'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

/* tslint:disable:no-unused-expression */
injectGlobal`
    @font-face {
        font-family: Alverata Black;
        src: url(/Alverata-Black.otf);
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
`
/* tslint:enable:no-unused-expression */

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
