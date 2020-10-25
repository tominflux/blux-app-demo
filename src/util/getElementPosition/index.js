
const getElementPosition = (
    element,
    position = { x: 0, y: 0 }
) => {
    if (!element)
        return { ...position }
    const scrollX = (element.tagName === "BODY") ?
        (element.scrollLeft || document.documentElement.scrollLeft) :
        element.scrollLeft
    const scrollY = (element.tagName === "BODY") ?
        (element.scrollLeft || document.documentElement.scrollLeft) :
        element.scrollLeft
    const elementPosX = element.offsetLeft - scrollX + element.clientLeft
    const elementPosY = element.offsetTop - scrollY + element.clientTop
    const accumPosX = position.x + elementPosX
    const accumPosY = position.y + elementPosY
    const nextPos = getElementPosition(element.offsetParent, {
        x: accumPosX, y: accumPosY
    })
    return { ...nextPos }
}

export default getElementPosition
