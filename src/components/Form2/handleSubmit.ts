export const handleSubmit = async (inputValues) => {

    const JSONdata = JSON.stringify(inputValues)
    const endpoint = '/api/forms/form'

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