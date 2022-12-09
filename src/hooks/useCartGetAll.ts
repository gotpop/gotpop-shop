import { useEffect } from "react"
import useSWR from "swr"

const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then(res => res.json())

export function useCartGetAll(isOpen) {
    const options = { refreshInterval: 2000 }
    const { data, error, isValidating } = useSWR(isOpen ? 'api/cart/cartget' : null, fetcher, options)

    // const cartQuantity = cart.reduce(
    //   (quantity, item) => item.quantity + quantity,
    //   0
    // )

    return {
        cart: data,
        isValidating: isValidating,
        isLoading: !error && !data,
        isError: error,
        isEmpty: data?.length === 0
    }
}
