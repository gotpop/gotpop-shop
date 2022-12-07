import useSWR from "swr"

const fetcher = (url: string) =>
    fetch(url).then(res => res.json())

export function useCart() {
    const { data, error } = useSWR('api/item', fetcher)


    // const { data, error } = useSWR(['api/cartget', config], fetcher)

    return {
        cartItem: data,
        isLoading: !error && !data,
        isError: error
    }
}
