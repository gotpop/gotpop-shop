export const formInitialState = {
    firstName: {
        value: '',
        valid: true,
        error: 'First name must be between 4 & 8 characters.'
    },
    lastName: {
        value: '',
        valid: true,
        error: 'Last name must be between 4 & 8 characters.'
    },
    email: {
        value: '',
        valid: true,
        error: 'Add a valid email!'
    },
    password: {
        value: '',
        valid: true,
        error: 'Add a valid password!'
    }
}

export const cssSuccess = [{ local: '--iconColour', global: 'var(--success)' }]