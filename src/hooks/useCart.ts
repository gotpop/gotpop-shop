import useSWR from "swr"
import { useSession } from "next-auth/react"

const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then(res => res.json())

export function useCart(id: string | null) {
    const URL = `/api/cart/${id}`
    const { data, error, mutate } = useSWR(URL, fetcher)
    const { data: session } = useSession()

    const cartItemUpdate = async (quantity: number) => {
        const email = session?.user?.email
        const payload = { id, quantity, email}

        mutate(payload, false)

        const returnedCartData = await fetcher(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }

    return {
        cartItem: data,
        cartItemUpdate: cartItemUpdate,
        isCartItemError: error,
        isCartItemLoading: !error && !data
    }
}
