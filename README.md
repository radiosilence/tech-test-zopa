# tech-test-zopa

Hello and welcome to the tech test I've built for Zopa!

## Built (mainly) with:

 * typescript
 * react
 * redux
 * redux-observable
 * socket.io
 * redux-rx-http (my http libary, I'd recommend taking a look at this too as I
   spent several hours today bringing it up to date with RxJS 6)
 * decimal.js (regarding money, float is not reliable)
 * validate.js


## Features

  * Fully typed
  * Outgoing transactions are posted via HTTP
  * Incoming data is done through socket.io, simulating "push" transactions
  * Demonstration of how epics can be used to do validation/submission
  * Any data access is done through selectors so changing structure of state is
    simple.
  * styled-components

## In order to run:

 * `yarn`
 * `yarn start`
 * (in a separate terminal) `yarn api`

## Things not done:

 * Enzyme/Jest test suite (takes too much time for a tech test)
 * Perfect CSS
