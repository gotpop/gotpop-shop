import useSWR from "swr"

const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then(res => res.json())

export function useCart(id) {
    const url = `/api/cart/${id}`
    const { data, error, mutate } = useSWR(url, fetcher)

    const handleUpdate = async quantity => {
        const payload = { id: id, quantity: quantity }

        await mutate(payload, false)
        await fetcher(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }

    return {
        handleUpdate: handleUpdate,
        cartItem: data,
        mutate: mutate,
        isLoading: !error && !data,
        isError: error
    }
}
