export const getComponent = (iconsMap, id) => {
    const icon = iconsMap.get(parseInt(id))

    return icon ? icon() : null
}