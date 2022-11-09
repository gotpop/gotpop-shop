import { formInitialState } from "./state"

export const reducerInputChange = (e: React.ChangeEvent<HTMLInputElement>, dispatchFormValue) => {
    const { name, value } = e.target
    const valid = e.target.checkValidity()
    const error = formInitialState[name].error

    dispatchFormValue({
        [name]: {
            value,
            valid,
            error
        }
    })
}