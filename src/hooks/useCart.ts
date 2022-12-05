import useSWR from "swr"

const fetcher = (url: string, payload) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())

export function useCart() {
    const { data, error } = useSWR('api/cartget', fetcher)

    return {
        cart: data,
        isLoading: !error && !data,
        isError: error
    }
}
