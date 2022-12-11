import { CartItem, Product } from "@prisma/client"
import { useEffect, useState } from "react"
import useSWR, { Fetcher } from "swr"

import { CartItemWithProduct } from "@lib/prisma"

const fetcher: Fetcher<CartItemWithProduct[]> = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then(res => res.json())

export function useCartGetAll(isOpen: boolean) {
    const options = { refreshInterval: 2000 }

    const { data: cart, error, isValidating } = useSWR(isOpen ? 'api/cart/cartget' : null, fetcher, options)
    const cartQuantity = cart?.reduce((quantity, item) => item.quantity + quantity, 0)

    const cartTotal = cart?.reduce((quantity, item) => {
        const product = item.product as Product
        const result = product.basePrice * item.quantity
        const finalResult = result + quantity
    
        return finalResult
    }, 0)

    return {
        cart,
        cartTotal,
        cartQuantity,
        isValidating,
        isLoading: !error && !cart,
        isError: error,
        isEmpty: cart?.length === 0
    }
}
