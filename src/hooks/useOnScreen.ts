import { RefObject, useEffect, useRef, useState } from 'react'

export function useOnScreen(ref: RefObject<any>) {
    const [isOnScreen, setIsOnScreen] = useState(false)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting)
        }, { threshold: 0.7 }
        )
    }, [])

    useEffect(() => {
        if (observerRef.current === null) return

        observerRef.current.observe(ref.current)

        return () => {
            if (observerRef.current === null) return

            observerRef.current.disconnect()
        }
    }, [ref])

    return isOnScreen;
}
