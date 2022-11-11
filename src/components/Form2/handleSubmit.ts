export const handleSubmit = async (inputValues) => {
    const endpoint = '/api/forms/form'

    const postObject = {
        firstName: inputValues.firstName.value,
        lastName: inputValues.lastName.value,
        email: inputValues.email.value,
        password: inputValues.password.value
    }

    const JSONdata = JSON.stringify(postObject)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    return {
        response,
        result
    }
}