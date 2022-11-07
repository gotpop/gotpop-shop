import { IForm2 } from "types"

const types = {
    FIRSTNAME: 'firstName',
    LASTNAME: 'lastName',
    EMAIL: 'email',
    PASSWORD: 'password'
}

export const reducer = (state: any, action: IForm2) => {
    const key = Object.keys(action)[0]

    switch (key) {
        case types.FIRSTNAME:
            return {
                ...state,
                firstName: {
                    value: action.firstName.value,
                    valid: action.firstName.valid,
                    error: action.firstName.error
                }
            }
        case types.LASTNAME:
            return {
                ...state,
                lastName: {
                    value: action.lastName.value,
                    valid: action.lastName.valid,
                    error: action.lastName.error
                }
            }
        case types.EMAIL:
            return {
                ...state,
                email: {
                    value: action.email.value,
                    valid: action.email.valid,
                    error: action.email.error
                }
            }
        case types.PASSWORD:
            return {
                ...state,
                password: {
                    value: action.password.value,
                    valid: action.password.valid,
                    error: action.password.error
                }
            }
        default:
            return {
                ...state
            }
    }
}