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
    const filteredData = data?.CartItems.filter(item => item.quantity > 0)

    return {
        cart: filteredData,
        isLoading: !error && !data,
        isError: error,
        isEmpty: filteredData?.length === 0 ? true : false
    }
}
