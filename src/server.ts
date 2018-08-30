import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'

import * as IO from 'socket.io'
import * as http from 'http'

import { Decimal } from 'decimal.js'
import { TransactionModel, AccountState } from './interfaces'

type Ctx = Koa.Context
const app = new Koa()
const router = new Router()

app.use(router.routes())
app.use(bodyParser())

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
    const transaction = ctx.request.body as TransactionModel
    database.account.transactions.push(transaction)
    io.emit('transaction', transaction)
})

server.listen(5555)
