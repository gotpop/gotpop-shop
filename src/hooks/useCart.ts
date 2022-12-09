import useSWR from "swr"
import { useShoppingCart } from "@context/ShoppingCartContext"
import { useState } from "react"

const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then(res => res.json())

export function useCart(id) {
    const URL = `/api/cart/${id}`
    const { data, error, mutate } = useSWR(URL, fetcher)

    const cartItemUpdate = async quantity => {
        const payload = { id, quantity }

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
