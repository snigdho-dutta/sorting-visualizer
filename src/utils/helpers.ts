export const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const updateClassListFromArrayIdx = (
  lineIdx: number,
  addClassList: string[],
  removeClassList: string[]
) => {
  document.querySelectorAll(`#line-${lineIdx}`).forEach((element) => {
    addClassList.forEach((className) => {
      element.classList.add(className)
    })
    removeClassList.forEach((className) => {
      element.classList.remove(className)
    })
  })
}
export const updateClassListFromElement = (
  ele: Element,
  addClassList: string[],
  removeClassList: string[]
) => {
  addClassList.forEach((className) => {
    ele.classList.add(className)
  })
  removeClassList.forEach((className) => {
    ele.classList.remove(className)
  })
}

export const updateHeightValue = (
  lineIdx: number,
  newHeight: number | undefined
) => {
  const line = document.querySelector(`#line-${lineIdx}`) as HTMLDivElement
  if (newHeight) {
    line.style.height = `${newHeight}px`
  }
}
