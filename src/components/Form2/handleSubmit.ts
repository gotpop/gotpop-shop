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

    const headers = new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
    })

    const JSONdata = JSON.stringify(postObject)

    const options = {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        headers,
        body: JSONdata
    }

    console.log('options.headers :', options.headers);

    const response = await fetch(endpoint, options)

    if (response.ok) {
        console.log('response.ok :', response.ok);
    }

    const results = await response.json()

    return {
        response,
        results
    }
}