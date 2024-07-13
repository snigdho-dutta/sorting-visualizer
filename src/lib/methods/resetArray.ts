import { randInt, updateClassListFromElement } from '../../utils/helpers'
import { SetState } from '../../utils/types'

export default function resetArray(
  setArray: SetState<number[]>,
  setIsDisabled: SetState<boolean>,
  setIsAnimationOver: SetState<boolean>
) {
  const container = document.getElementById('content-container')
  if (!container) throw new Error('Contaienr Not Defined')

  const containerWidth = container.clientWidth

  const tempArray: number[] = []
  const numLines = containerWidth / 8
  const maxHeight = Math.max(containerWidth - 420, 100)

  for (let i = 0; i < numLines; i++) {
    tempArray.push(randInt(35, maxHeight))
  }
  setArray(tempArray)
  setIsDisabled(false)
  setIsAnimationOver(false)

  const highestId = window.setTimeout(() => {
    for (let i = 0; i < numLines; i++) {
      window.clearInterval(highestId)
    }
  }, 0)
  setTimeout(() => {
    const array = document.getElementById('array-lines')!.children
    for (let i = 0; i < array.length; i++) {
      updateClassListFromElement(array[i], ['line-inactive'], ['line-active'])
    }
  }, 1000)
}
