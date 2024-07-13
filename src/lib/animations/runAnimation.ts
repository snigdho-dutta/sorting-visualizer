import { Dispatch, SetStateAction } from 'react'
import { AnimationArray } from '../../utils/types'
import {
  updateClassListFromElement,
  updateHeightValue,
} from '../../utils/helpers'

export default function runAnimations(
  animations: AnimationArray,
  setIsSoring: Dispatch<SetStateAction<boolean>>,
  setIsAnimationOver: Dispatch<SetStateAction<boolean>>,
  speed: number
) {
  const lineArrays = document.querySelectorAll('[id^="line-"]')
  const inverseSpeed = (1 / speed) * 200
  setIsSoring(true)
  animations.forEach((animation, idx) => {
    const [lineIndexes, isSwap] = animation
    setTimeout(() => {
      if (!isSwap) {
        lineIndexes.forEach((lineIdx) => {
          updateClassListFromElement(
            lineArrays[lineIdx],
            ['line-inactive'],
            ['line-active']
          )
        })
        setTimeout(() => {
          lineIndexes.forEach((lineIdx) => {
            updateClassListFromElement(
              lineArrays[lineIdx],
              ['line-active'],
              ['line-inactive']
            )
          })
        }, inverseSpeed)
      } else {
        const [lineIdx, height] = lineIndexes
        updateHeightValue(lineIdx, height)
      }
    }, idx * inverseSpeed)
  })
  setTimeout(() => {
    lineArrays.forEach((lineEle) => {
      updateClassListFromElement(
        lineEle,
        ['pulse-animation', 'line-active'], //add
        ['line-inactive'] //remove
      )
    })
    setTimeout(() => {
      Array.from(lineArrays).forEach((lineEle) => {
        updateClassListFromElement(
          lineEle,
          ['line-inactive'], //add
          ['pulse-animation', 'line-active'] //remove
        )
      })
      setIsSoring(false)
      setIsAnimationOver(true)
    }, 1000)
  }, animations.length * inverseSpeed)
}
