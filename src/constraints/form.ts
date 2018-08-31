export const formConstraints = {
    name: { length: { minimum: 1 } },
    email: { email: true },
    amount: { decimal: true },
}
