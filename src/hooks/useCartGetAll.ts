import useSWR from "swr"

const fetcher = (url: string) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify('')
    }).then(res => res.json())

export function useCartGetAll() {
    const { data, error } = useSWR('api/cart/cartget', fetcher)

    return {
        cart: data,
        isLoading: !error && !data,
        isError: error
    }
}
