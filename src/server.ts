import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as koaBody from 'koa-body'
import * as uuid from 'uuid'
import accepts from 'koa-accepts'
const cors = require('@koa/cors')

import * as IO from 'socket.io'
import * as http from 'http'

import { Decimal } from 'decimal.js'
import { TransactionModel, AccountState } from './interfaces'

// const sleep = (interval: number) =>
//     new Promise((resolve) => setTimeout(resolve, interval))

type Ctx = Koa.Context
const app = new Koa()
const router = new Router()

app.use(koaBody())
app.use(cors())
app.use(accepts())
app.use(router.routes())

const server = http.createServer(app.callback())
const io = IO(server)

interface Database {
    account: AccountState
}

const database: Database = {
    account: {
        balance: new Decimal(5000.0),
        transactions: [],
    },
}

router.get('/account', async (ctx: Ctx) => {
    ctx.body = database.account
})

router.post('/transaction', async (ctx: Ctx) => {
    console.log('request', ctx.request)
    console.log('transactionr', ctx.request.body)
    const transaction = {
        ...(ctx.request.body as TransactionModel),
        id: uuid(),
    }
    database.account.transactions.push(transaction)
    // await sleep(Math.random() * 200)
    ctx.body = ctx.request.body
    // await sleep(Math.random() * 200)
    io.emit('transaction', transaction)
})

io.on('connection', (msg) => {})
server.listen(5555)
