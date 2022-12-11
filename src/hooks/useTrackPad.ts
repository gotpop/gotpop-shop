import { useEffect, useState } from 'react'

export function useTrackPad() {
    const [isTrackPad, setIsTrackPad] = useState(false)

    const trackPadActive = () => {
        localStorage.setItem('trackPad', 'true')
        document.documentElement.style.setProperty('--scroll-type', 'proximity')
    }

    useEffect(() => {
        let timesEventFired = 0

        function handleWheel() {
            timesEventFired++
            timesEventFired > 50 ? setIsTrackPad(true) : setIsTrackPad(false)

            setTimeout(() => { timesEventFired = 0 }, 3000)
        }

        document.addEventListener('wheel', handleWheel, false)

        return () => document.removeEventListener('wheel', handleWheel, false)
    }, [])

    useEffect(() => {
        if (!isTrackPad) return

        trackPadActive()

    }, [isTrackPad])

    return {
        isTrackPad
    }
}
