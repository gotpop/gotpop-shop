const contentKeyframes = {
    transform: ['translatex(-5%)', 'translatex(0%)'],
    opacity: [.5, 1],
    easing: 'ease-out'
}

const imageKeyframes = {
    transform: ['translatex(5%)', 'translatex(0%)'],
    opacity: [.5, 1],
    easing: 'ease-out'
}

const timing = {
    duration: 400,
    delay: 200,
    fill: 'both'
} as KeyframeAnimationOptions


export const panelAnimations = (
    contentVar: HTMLDivElement | null,
    imageVar: HTMLImageElement | null,
    isOnScreen: boolean
) => {
    const content = contentVar?.animate(contentKeyframes, timing)
    const image = imageVar?.animate(imageKeyframes, timing)

    content?.pause()
    image?.pause()

    if (isOnScreen) {
        content?.play()
        image?.play()
    } else {
        content?.reverse()
        image?.reverse()
    }
}