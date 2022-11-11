export const formInitialState = {
    firstName: {
        value: '',
        text: 'First Name',
        valid: true,
        error: 'First name must be between 4 & 8 characters.'
    },
    lastName: {
        value: '',
        text: 'Last Name',
        valid: true,
        error: 'Last name must be between 4 & 8 characters.'
    },
    email: {
        value: '',
        text: 'Email',
        valid: true,
        error: 'Add a valid email!'
    },
    password: {
        value: '',
        text: 'Password',
        valid: true,
        error: 'Add a valid password!'
    }
}

export const cssSuccess = [{ local: '--iconColour', global: 'var(--success)' }]