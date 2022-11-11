export const handleSubmit = async (inputValues) => {
    const { firstName, lastName, email, password } = inputValues
    const endpoint = '/api/forms/form'

    const postObject = {
        firstName: {
            text: firstName.text,
            value: firstName.value
        },
        lastName: {
            text: lastName.text,
            value: lastName.value
        },
        email: {
            text: email.text,
            value: email.value
        },
        password: {
            text: password.text,
            value: password.value
        }
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
    const results = await response.json()

    return {
        response,
        results
    }
}