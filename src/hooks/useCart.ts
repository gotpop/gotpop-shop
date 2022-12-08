import useSWR from "swr"
import { useShoppingCart } from "@context/ShoppingCartContext"
import { useState } from "react"

export function useCart(id) {
    const { handleSetCart, handleGetCart } = useShoppingCart()
    const [localCart, setLocalCart] = useState([])

    const fetcher = (
        ...args: [input: RequestInfo, init?: RequestInit | undefined]
    ) => fetch(...args).then(res => res.json())
        .then(res => {
            handleSetCart(res.cart)
            setLocalCart(res.cart)

            return res
        })

    const URL = `/api/cart/${id}`
    const { data, error, mutate } = useSWR(URL, fetcher)

    const handleUpdate = async quantity => {
        const updatedLocalCart = localCart.map(item => {
            if (item.product.id === id) {
                return { ...item, quantity: quantity };
            }
            return item;
        })

        const payload = { id, quantity, cart: updatedLocalCart }
        const returnedLocalCartData = await mutate(payload, false)

        handleSetCart(payload.cart)

        const returnedCartData = await fetcher(URL, {
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
        cart: handleGetCart,
        mutate: mutate,
        isLoading: !error && !data,
        isError: error
    }
}
