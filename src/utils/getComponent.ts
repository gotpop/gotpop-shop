export const getComponent = (iconsMap, id) => {
    const icon = iconsMap.get(parseInt(id))

    return icon ? icon() : null
}

export const getImage = (imagesMap, id) => {
    const image = imagesMap.get(parseInt(id))

    return image ? image : null
}