import { IData3 } from "@types"

export const handleSubmit = async (data: IData3) => {
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/forms/formSubmit1'

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    return result
}